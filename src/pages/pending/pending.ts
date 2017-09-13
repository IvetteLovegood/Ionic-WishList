import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// #Services
import { WishListService } from '../../app/services/wish-list.service';
// #Pages
import { AddPage } from '../add/add';
import { DetailsPage } from '../details/details';

@IonicPage()
@Component({
    selector: 'page-pending',
    templateUrl: 'pending.html',
})
export class PendingPage {

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private _wishListService: WishListService
     ) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PendingPage');
    }

    toAdd() {
        this.navCtrl.push( AddPage );
    }

    listDetails( list, idx ) {
        this.navCtrl.push( DetailsPage, {
            list: list,
            idx: idx
        });
    }

}
