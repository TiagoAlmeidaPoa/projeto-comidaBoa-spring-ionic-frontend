import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CredenciaisAnfitriaoDTO } from '../../models/credenciais-anfitriao.dto';

/**
 * Generated class for the AnfitriaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-anfitriao',
  templateUrl: 'anfitriao.html',
})
export class AnfitriaoPage {

  credsAnf : CredenciaisAnfitriaoDTO = {
    nome : "",
    telefone : ""
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnfitriaoPage');
  }

  paginaCadastroAnfitriao() {
    this.navCtrl.setRoot("CadastroAnfitriaoPage");
  }

  login() {
    console.log(this.credsAnf);
  }

}
