import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CadastroConvidadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-convidado',
  templateUrl: 'cadastro-convidado.html',
})
export class CadastroConvidadoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroConvidadoPage');
  }

  vaiParaTelaConvidado() {    
    this.navCtrl.setRoot("ConvidadoPage");
  }

}
