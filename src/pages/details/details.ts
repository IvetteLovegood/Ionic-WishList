import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
// #Util Classes
import { List, ListItem } from '../../app/classes/generic-classes';
// #Services
import { WishListService } from '../../app/services/wish-list.service';

@IonicPage()
@Component({
    selector: 'page-details',
    templateUrl: 'details.html',
})
export class DetailsPage {

    idx: number;
    list: List;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public _wishListService: WishListService,
        public alertCtrl: AlertController
    ) {
        // Obtain Params
        this.idx    = this.navParams.get("idx");
        this.list   = this.navParams.get("list");
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad DetailsPage');
    }

    updateItem( item:ListItem ) {
        item.completed = !item.completed;

        // Update Completed Status
        let allChecked = true;
        for (let item of this.list.items ) {
            if ( !item.completed ) {
                allChecked = false;
                break;
            }
        }

        // 
        this.list.finished = allChecked;
        // Call Update Data
        this._wishListService.updateData();
    }

    removeList( ){
        this.showConfirm();
    }

    showConfirm() {
        let confirm = this.alertCtrl.create({
            title: this.list.name,
            message: 'Are you sure you want to permanently remove this item?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: () => {
                        return;
                    }
                },
                {
                    text: 'Remove',
                    handler: () => {
                        // Remove list function and return previous page
                        this._wishListService.deleteList( this.idx );
                        this.navCtrl.pop();
                    }
                }
            ]
        });
        confirm.present();
    }

}
