import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConfiguracaoService } from 'src/app/services/Configuracao/configuracao.service';

@Component({
  selector: 'app-configuracao-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule],
  templateUrl: './configuracao-dialog.component.html',
  styleUrls: ['./configuracao-dialog.component.scss']
})
export class ConfiguracaoDialogComponent {

  constructor(
    protected configuracao: ConfiguracaoService
  ) {
    this.tokenControl.setValue(configuracao.token);
  }

  tokenControl = new FormControl('');

  salvarConfiguracao(){
    this.configuracao.AtribuirToken(this.tokenControl.value as string);
  }
}
