import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditShoppingItemPage } from './edit-shopping-item';
import { AgmCoreModule } from '@agm/core'

@NgModule({
  declarations: [
    EditShoppingItemPage,
     
  ],
  imports: [
    IonicPageModule.forChild(EditShoppingItemPage),
    AgmCoreModule  //NOT EXPLAINED ON THE TUTO BUT FIX THE ISSUE WITH GMAPS OF NOT DISPLAYING AT ALL
  ],
})
export class EditShoppingItemPageModule {}
