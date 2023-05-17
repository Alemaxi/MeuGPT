import { Injectable } from '@angular/core';
import { Pesquisa } from 'src/app/shared/Domain/Entity/pesquisa';

@Injectable({
  providedIn: 'root'
})
export class PesquisaService {

  pesquisas: Pesquisa[] = [];

  constructor() { 
    /*this.pesquisas = [
      {nome:"alexandre", model:"model",mensagens:[ {role:'user',content:"okkkk",name:'noname'},{role:'user',content:"okkkk",name:'noname',}]},
      {nome:"alexandre", model:"model",mensagens:[ {role:'user',content:"okkkk",name:'noname'},{role:'user',content:"okkkk",name:'noname'}]},
      {nome:"alexandre", model:"model",mensagens:[ {role:'user',content:"okkkk",name:'noname'},{role:'user',content:"okkkk",name:'noname'}]},
      {nome:"alexandre", model:"model",mensagens:[ {role:'user',content:"okkkk",name:'noname'},{role:'user',content:"okkkk",name:'noname'}]},
      {nome:"alexandre", model:"model",mensagens:[ {role:'user',content:"okkkk",name:'noname'}]},
      {nome:"alexandre", model:"model",mensagens:[ {role:'user',content:"okkkk",name:'noname'}]},
      {nome:"alexandre", model:"model",mensagens:[ {role:'user',content:"okkkk",name:'noname'}]},
      {nome:"alexandre", model:"model",mensagens:[ {role:'user',content:"okkkk",name:'noname'}]},
      {nome:"alexandre", model:"model",mensagens:[ {role:'user',content:"okkkk",name:'noname'}]},
      {nome:"alexandre", model:"model",mensagens:[ {role:'user',content:"okkkk",name:'noname'}]},
      {nome:"alexandre", model:"model",mensagens:[ {role:'user',content:"okkkk",name:'noname'}]},
      {nome:"alexandre", model:"model",mensagens:[ {role:'user',content:"okkkk",name:'noname'}]},
      {nome:"alexandre", model:"model",mensagens:[ {role:'user',content:"okkkk",name:'noname'}]},
      {nome:"alexandre", model:"model",mensagens:[ {role:'user',content:"okkkk",name:'noname'}]},
      {nome:"alexandre", model:"model",mensagens:[ {role:'user',content:"okkkk",name:'noname'}]},
    ]*/
  }

  ObterPesquisas(): Pesquisa[] {
    return this.pesquisas;
  }

  CriarPesquisa(titulo: string){
    let pesquisa = new Pesquisa();
    pesquisa.model = "gpt-3.5-turbo-0301";
    pesquisa.nome = titulo;

    this.pesquisas.push(pesquisa);
    console.log("pesquisa");
  }
}
