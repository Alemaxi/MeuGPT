import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pesquisa } from '../../Domain/Entity/pesquisa';
import { MensagemChat } from '../../Domain/Entity/mensagemChat';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ChatCompletion } from '../../Domain/Entity/chatCompletion';
import { GptService } from 'src/app/services/GPT/gpt.service';
import { ConfiguracaoService } from 'src/app/services/Configuracao/configuracao.service';
import { QuebraDeLinhaPipe } from '../../pipe/quebra-de-linha.pipe';

@Component({
  selector: 'app-mensagens-layout',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    QuebraDeLinhaPipe
  ],

  templateUrl: './mensagens-layout.component.html',
  styleUrls: ['./mensagens-layout.component.scss'],
})
export class MensagensLayoutComponent {

  title: string = '';
  fechado:boolean = true;
  mensagens: MensagemChat[] = [];
  mensagensEnviar: MensagemChat[] = [];
  pesquisa: Pesquisa | undefined;

  textoControl = new FormControl('', Validators.required);

  constructor(
    protected gpt: GptService,
    protected configuracao: ConfiguracaoService
  ){

  }

  Abrir(pesquisa:Pesquisa){
    this.title = pesquisa.nome as string;
    this.mensagens = pesquisa.mensagens;
    this.fechado = false;
    this.pesquisa = pesquisa;
  }

  Fechar(){
    this.title = '';
    this.fechado = true;
  }

  MensagemSelecionada(mensagem: MensagemChat){

    if(this.mensagensEnviar.includes(mensagem)){
      this.mensagensEnviar = this.mensagensEnviar.filter(x => x!=mensagem);
      return;
    }

    this.mensagensEnviar.push(mensagem);
  }

  MensagemEstaSelecionada(mensagem: MensagemChat): boolean{
    return this.mensagensEnviar.includes(mensagem);
  }

  EnviarMensagem() {
    if(this.textoControl.invalid){
      return;
    }

    let MensagemEnviar = new ChatCompletion();

    let mensagemChat = new MensagemChat();

    mensagemChat.content = (this.textoControl.value as string);
    mensagemChat.role = 'user';

    this.mensagens.push(mensagemChat);
    this.mensagensEnviar.push(mensagemChat);

    this.configuracao.TravarApp();

    this.gpt.EnviarMensagem(
      this.pesquisa?.model as string,
      this.mensagensEnviar, 
      this.configuracao.ObterFullToken()
    ).subscribe({
      next: x => {
        this.mensagensEnviar = [];
        this.mensagens.push(x.choices[0].message as MensagemChat)
        this.textoControl.reset();
        this.configuracao.DestravarApp();
      },
      error: err => {
        this.configuracao.DestravarApp();
        this.configuracao.LancarSnackBar("Erro ao se comunicar com o GPT.")
      }
    })
  }

  ObterTexto(texto: string | undefined):string {
    return (texto as string).replace(/\n/g, "<br>")
  }
}
