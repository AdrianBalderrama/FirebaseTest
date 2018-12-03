import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import {AngularFireModule} from "angularfire2"
import{AngularFireDatabaseModule} from "angularfire2/database"
import { MyApp } from './app.component';
import { FIREBASE_CONFIG } from './firebase.credentials';
import { ShoppingListService } from '../services/shopping-list/shopping-list.service';
import { Geolocation } from '@ionic-native/geolocation';
import { AgmCoreModule } from '@agm/core';
import { GeoService } from '../providers/geo/geo';


@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDn7rCWT4iDyxLnuz4ST32YrDpi3fyzz7g'

    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ShoppingListService,
    GeoService
  ]
})
export class AppModule {}
