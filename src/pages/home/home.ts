import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular/components/app/menu-controller';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menu: MenuController) {

  }

  paginaAnfitriao() {
    this.navCtrl.push("AnfitriaoPage");
  }

  paginaConvidado() {
    this.navCtrl.push("ConvidadoPage");
  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }
    
  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

}
