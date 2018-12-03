import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item/item.model';
import {} from '@agm/core'
import {Location} from "../../models/locations";
import { Geolocation } from '@ionic-native/geolocation'
 //geofire
import {GeoService} from '../../providers/geo/geo'
/**
 * Generated class for the EditShoppingItemPage page.
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
  
  

  //geof
  markers:any;
  subscription:any;

  locations:Location;
  constructor(public navCtrl: NavController, public navParams: NavParams,  public geo:Geolocation,private geof:GeoService) {
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



//GEOFIRE
ngOnInit(){
  this.getUserLocation()
  this.subscription = this.geof.hits
        .subscribe(hits => this.markers = hits)
    
}

ngOnDestroy() {
  this.subscription.unsubscribe()
}

private getUserLocation(){
    //Locate the user from Geof (geofire not working yet tho)

    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position=>{
        this.lat= position.coords.latitude;
        this.lng = position.coords.longitude;
         //Tell geofire the query search
          this.geof.getLocations(500,[this.lat,this.lng])

      });
    }

}



}//CLOSE KEY FOR EDITSHOPPINGCLASS
//set location equal this one

