import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Item } from "../../models/item/item.model";
  
@Injectable()
export class ShoppingListService{

    private shoppingListRef = this.db.list<Item>("jsonprueba-12bda");

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

