import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item/item.model';
import {} from '@agm/core'
import {Location} from "../../models/locations";
 

/**
 * Generated class for the EditShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})





export class EditShoppingItemPage {
  item:Item; //Create the item
  locx:Number=19;
  locy:Number=-92;

  locations:Location;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.locations=this.navParams.get('locations');
  }

  ionViewWillLoad() {
    //Get the item to the Nav
  this.item= this.navParams.get('item');  //Get the data from home of the item
  /*this.locx= this.navParams.get('item.location.x'); //TESTING TO TRY GET THE NUMBER OF THE HOME
  this.locy= this.navParams.get('item.location[0].y');*/
 
 
  console.log(this.navParams.get('item'));
  console.log(this.navParams.get('locx'));
  console.log(this.navParams.get('item.location[x]'));
  }

//setlocation equal this ONE

}

