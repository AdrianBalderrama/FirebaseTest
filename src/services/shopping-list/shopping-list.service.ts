import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Item } from "../../models/item/item.model";
 

@Injectable()
export class ShoppingListService{
  
      //FILTER DATA THRU X
      //SORT OF WORK, NOW MAKE IT THROUGHT THE COORDS not
    private shoppingListRef = this.db.list<Item>("/Gasolineras",
     ref => ref.orderByChild('/location/x').startAt('-106').endAt('-106.14'));
/*-106.14 to -106 */
    
    constructor(private db: AngularFireDatabase){  }

    getShoppingList(){
        return this.shoppingListRef;
        
    }

    addItem(item:Item){
        return this.shoppingListRef.push(item);

    }


    


}


                     
/*
const filterbyId=(item:Item[],range:{min: number, max:number})=> item.filter(item=> item._place_id>=range.min
    && item._place_id<=range.max);

const filterbyId= filterbyId(item._place_id,minMax);
*/

