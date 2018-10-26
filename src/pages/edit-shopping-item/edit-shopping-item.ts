import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item/item.model';
import {} from '@agm/core'
import {Location} from "../../models/locations";
import { Geolocation } from '@ionic-native/geolocation'
 

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
  loclng:number;
  loclat:number;
  lat: number;
  lng: number;


  locations:Location;
  constructor(public navCtrl: NavController, public navParams: NavParams,  public geo:Geolocation,) {
     this.locations=this.navParams.get('locations');
  }

  ionViewWillLoad() {
    //Get the item to the Nav
  this.item= this.navParams.get('item'); 
  this.loclng=this.item.location.x;
  this.loclat=this.item.location.y;
   //Get the data from home of the item
  /*this.locx= this.navParams.get('item.location.x'); //TESTING TO TRY GET THE NUMBER OF THE HOME
  this.locy= this.navParams.get('item.location[0].y');*/
 
  //TESTING GEOLOCATION ON EDIT SHOPPING, REMOVE CONSTRUCTOR AND OTHER IF NECESSARY
  this.geo.getCurrentPosition().then(post =>{
    this.lat= post.coords.latitude;
    this.lng= post.coords.longitude;
  }) .catch(err=> console.log(err));
  

  //Testing
  console.log(this.navParams.get('item'));
  console.log('loclng');
  console.log('loclat');
  
 
  






} //CLOSE KEY FOR ONVIEWWILLLOAD
}//CLOSE KEY FOR EDITSHOPPINGCLASS
//set location equal this one

