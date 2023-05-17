import { Injectable } from '@angular/core';
import { MensagemChat } from 'src/app/shared/Domain/Entity/mensagemChat';
import { GenericService } from '../generic-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChatCompletion } from 'src/app/shared/Domain/Entity/chatCompletion';
import { Observable } from 'rxjs';
import { CompletionResponse } from 'src/app/shared/Domain/Entity/completionResponse';
import { ConfiguracaoService } from '../Configuracao/configuracao.service';

@Injectable({
  providedIn: 'root'
})
export class GptService extends GenericService {

  constructor(
    protected http: HttpClient,
    protected configuracao: ConfiguracaoService
  ) {
    super();
  }

  EnviarMensagem(
    modelo: string, 
    mensgens: MensagemChat[],
    token: string
  ): Observable<CompletionResponse>{

    let completion = new ChatCompletion();
    completion.messages = mensgens;
    completion.model = modelo;

    let header = new HttpHeaders()
    header = header.append("AutContent-Type","application/json");
    header = header.append("Authorization",token);

    console.log(header);
    return this.http.post<CompletionResponse>(
      `${this.host}v1/chat/completions`,
      completion,{headers:header});
  }
}
