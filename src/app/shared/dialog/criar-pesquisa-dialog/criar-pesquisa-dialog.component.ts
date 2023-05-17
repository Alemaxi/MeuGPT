import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { PesquisaService } from 'src/app/services/pesquisa/pesquisa.service';

@Component({
  selector: 'app-criar-pesquisa-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './criar-pesquisa-dialog.component.html',
  styleUrls: ['./criar-pesquisa-dialog.component.scss']
})
export class CriarPesquisaDialogComponent {

  constructor(public pesquisa: PesquisaService){

  }

  pesquisaControl = new FormControl('',Validators.required);

  CriarPesquisa(){
    if(this.pesquisaControl.invalid){
      return;
    }

    this.pesquisa.CriarPesquisa(this.pesquisaControl.value as string);
  }

}
