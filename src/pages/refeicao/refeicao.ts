import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RefeicaoDTO } from '../../models/refeicao.dto';
import { RefeicaoService } from '../../services/domain/refeicao.service';

/**
 * Generated class for the RefeicaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-refeicao',
  templateUrl: 'refeicao.html',
})
export class RefeicaoPage {
  
  items: RefeicaoDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public refeicaoService : RefeicaoService) {
  }

  ionViewDidLoad() {
    this.refeicaoService.findAll()
        .subscribe(response => {
          this.items = response;
        },
        error => {});    
  }
    
}
