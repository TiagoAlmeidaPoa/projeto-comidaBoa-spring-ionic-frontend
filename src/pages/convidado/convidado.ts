import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CredenciaisConvidadoDTO } from '../../models/credenciais-convidado.dto';

/**
 * Generated class for the ConvidadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-convidado',
  templateUrl: 'convidado.html',
})
export class ConvidadoPage {

  credsConv : CredenciaisConvidadoDTO = {
    nome: "",
    telefone: ""
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConvidadoPage');
  }

  vaiParaTelaCadastroConvidado() {
    this.navCtrl.setRoot("CadastroConvidadoPage");
  }

  vaiParaTelaRefeicao() {
    console.log(this.credsConv)
    this.navCtrl.setRoot('RefeicaoPage');
  }

}
