import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracaoService {
  
  bearer: string = "Bearer" 
  token: string = "";

  carregando:boolean = false;

  constructor(
    protected snackbar: MatSnackBar
  ) { }

  AtribuirToken(token: string) {
    this.token = token;
  }

  ObterFullToken(): string{
    return `${this.bearer.trim()} ${this.token.trim()}`;
  }

  TravarApp(){
    this.carregando = true;
  }

  DestravarApp(){
    this.carregando = false;
  }

  LancarSnackBar(text: string | undefined) {
    this.snackbar.open(text as string,"Ok",{panelClass:"snackVermelho"})
  }
}
