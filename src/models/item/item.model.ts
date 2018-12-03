export interface Item{
_place_id?: number;
brand: string;
category: string;
name: string;
location:{ address_street: string;
    x: number,
    y:number,
   
}
price:{
    regular?: number;
    premium?:number;
    diesel?:number;
}
}