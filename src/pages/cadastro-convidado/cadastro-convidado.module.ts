import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroConvidadoPage } from './cadastro-convidado';

@NgModule({
  declarations: [
    CadastroConvidadoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroConvidadoPage),
  ],
})
export class CadastroConvidadoPageModule {}
