import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfiguracaoService } from './services/Configuracao/configuracao.service';
import { PesquisaService } from './services/pesquisa/pesquisa.service';
import { ConfiguracaoDialogComponent } from './shared/dialog/configuracao-dialog/configuracao-dialog.component';
import { CriarPesquisaDialogComponent } from './shared/dialog/criar-pesquisa-dialog/criar-pesquisa-dialog.component';
import { Pesquisa } from './shared/Domain/Entity/pesquisa';
import { MensagensLayoutComponent } from './shared/layout/mensagens-layout/mensagens-layout.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    protected dialog: MatDialog,
    public pesquisa: PesquisaService,
    public configuracao: ConfiguracaoService
    ) {
  }

  @ViewChild('mensagens') mensagens!:MensagensLayoutComponent;

  AbrirMensagens(title: string) {
    //this.mensagens.Abrir();
  }


  AbrirUpload(){
    var fileInput = document.createElement("input");
    fileInput.setAttribute("type", "file");
    fileInput.setAttribute("name", "fileToUpload");
    fileInput.setAttribute("id", "fileToUpload");

    fileInput.click();

    fileInput.addEventListener('change', x => {
      let item = (x.target as HTMLInputElement).files?.[0];
      
      let fileReader = new FileReader();

      fileReader.onload = event => {
        let result = event.target?.result;
        let item = JSON.parse((result as string));
        this.pesquisa.pesquisas = JSON.parse(item) as Pesquisa[];
      }

      fileReader.readAsText(item as Blob);
    })
  }


  AbrirAdd(){
    let dialogRef = this.dialog.open(CriarPesquisaDialogComponent, {
      width: '400px',
      minHeight: '200px'
    });
  }

  AbrirConfiguracao(){
    this.dialog.open(ConfiguracaoDialogComponent, {
      width: '400px',
      minHeight: '200px'
    });
  }

  BaixarPesquisas() {
    this.DownloadJSONAsText(JSON.stringify(this.pesquisa.ObterPesquisas()),"pesquisas");
  }


  DownloadJSONAsText(jsonData: string, filename: string) {
    // Converte o objeto JSON em uma string
    const jsonString = JSON.stringify(jsonData);
  
    // Cria um objeto Blob com o conteúdo da string JSON
    const blob = new Blob([jsonString], { type: 'text/plain' });
  
    // Cria uma URL para o objeto Blob
    const url = URL.createObjectURL(blob);
  
    // Cria um elemento de link de download
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
  
    // Adiciona o link ao documento
    document.body.appendChild(link);
  
    // Clica no link para iniciar o download
    link.click();
  
    // Remove o link do documento
    document.body.removeChild(link);
  
    // Libera a URL do objeto Blob
    URL.revokeObjectURL(url);
  }
}
