import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConvidadoPage } from './convidado';

@NgModule({
  declarations: [
    ConvidadoPage,
  ],
  imports: [
    IonicPageModule.forChild(ConvidadoPage),
  ],
})
export class ConvidadoPageModule {}
