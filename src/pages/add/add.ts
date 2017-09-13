import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

// #Util Classes
import { List, ListItem } from '../../app/classes/generic-classes';
// #Services
import { WishListService } from '../../app/services/wish-list.service';

@IonicPage()
@Component({
    selector: 'page-add',
    templateUrl: 'add.html',
})

export class AddPage {

    listName: string = "";
    itemName: string = "";

    // Items Array
    _items:ListItem[] = [];

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public alertCtrl: AlertController,
        public _wishListService: WishListService
    ) {  }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AddPage');
    }

    addItem() {
        if ( this.itemName.length < 1 ) {
            return;
        }

        // Item Creation
        let item = new ListItem();
        item.name = this.itemName;
        // Adding item to Items Array (before service call)
        this._items.push(item);
        this.itemName = "";

    }

    removeItem( _id: number ) {
        this._items.splice(_id, 1);
    }

    saveList() {
        if( this.listName.length < 1) {
            this.showAlert();
        } else if ( this._items.length < 1) {
            return;
        } else {
            // Create new List Object and his list items
            let list = new List( this.listName );
            list.items = this._items;

            // Sending List to Service Array
            // this._wishListService.lists.push( list );
            this._wishListService.addList( list );
            // Navigating back to Pending Page
            this.navCtrl.pop();
        }
    }

    showAlert() {
        let alert = this.alertCtrl.create({
            title: 'List Name Required',
            subTitle: 'List Name is required for saving changes',
            buttons: ['OK']
        });
        alert.present();
    }

}
