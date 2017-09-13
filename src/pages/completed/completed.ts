import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// #Services
import { WishListService } from '../../app/services/wish-list.service';
// #Pages
import { AddPage } from '../add/add';
import { DetailsPage } from '../details/details';

@IonicPage()
@Component({
    selector: 'page-completed',
    templateUrl: 'completed.html',
})

export class CompletedPage {

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private _wishList: WishListService
    ) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CompletedPage');
    }

    listDetails( list, idx ) {
        this.navCtrl.push( DetailsPage, {
            list: list,
            idx: idx
        });
    }

}
