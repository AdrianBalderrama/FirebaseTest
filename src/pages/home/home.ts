import { Component } from '@angular/core';
import { NavController, IonicPage, Platform, ModalController } from 'ionic-angular';
import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { Item } from '../../models/item/item.model';
import { snapshotChanges } from 'angularfire2/database';
import { Geolocation } from '@ionic-native/geolocation'
import { AgmCoreModule } from '@agm/core';
import {EditShoppingItemPage} from '../edit-shopping-item/edit-shopping-item'
import {Location} from '../../models/locations'

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  // THIS IS FOR THE GEOLOCATION
  shoppingList$: Observable<Item[]>;
  location:{ lat: number, lng: number};
  lat:any;
  lng: any;


  //TUTO LOCATION
 locations:Location={
   lats: 40.7624324,
   lngs: -73.9759827

 };
onOpenMap(){
  const modal = this.modalCtrl.create(EditShoppingItemPage, {locations:this.locations})
}



  constructor(public navCtrl: NavController, private shopping:ShoppingListService,
    public geo:Geolocation, private platform: Platform,private modalCtrl:ModalController) {


    this.shoppingList$= this.shopping
    .getShoppingList()  
    .snapshotChanges()  
    .map(
      changes =>{
        //return for any changes a new object
          return changes.map( c=>({
            key: c.payload.key, ... c.payload.val()

          }));

      });
  



      //PLATFORM AND OPTIONS FOR GEOLOCATION
this.platform.ready().then(() =>{

   


     /*PROBANDO CON FILTROS EN TYPESCRIPT*/ 
const minMax= {min:10, max:20 }

interface Gasolinera{
        _place_id: number;
        brand: string;
        category: string; 
        name: string;
}

const Gasolineras: Gasolinera[] = [
    {_place_id:15,brand:"Pemex",category:"Gas",name:"Pemexaso1"},
    {_place_id:14,brand:"Pemexo",category:"Gas",name:"Pemexaso2"},
    {_place_id:22,brand:"Pemexa",category:"Gas",name:"Pemexaso3"},
    {_place_id:5,brand:"Pemexe",category:"Gas",name:"Pemexaso4"},
]
 
const filterbyId=(Gasolineras:Gasolinera[],range:{min: number, max:number})=> Gasolineras.filter(Gasolinera=> Gasolinera._place_id>=range.min
    && Gasolinera._place_id<=range.max);

    const filteredbyId= filterbyId(Gasolineras,minMax);
    console.log(filteredbyId);



  /*PROBANDO CON FILTROS EN TYPESCRIPT END*/ 





  var options={
    timeout: 8000
  };

//CURRENT LOCATION THRU INITIALIZATION
this.geo.getCurrentPosition(options).then(post =>{
  this.lat= post.coords.latitude;
  this.lng= post.coords.longitude;
}) .catch(err=> console.log(err));
})

    }
    //CURRENT LOCATION THROUGHT CLICK ON FUNCTION
getGeolocation(){
 this.geo.getCurrentPosition().then(pos =>{
    this.lat= pos.coords.latitude;
    this.lng= pos.coords.longitude;
        }).catch(err=> console.log(err));
 
    }
    


  }

