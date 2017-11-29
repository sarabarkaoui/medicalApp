import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule,IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
 import { HttpModule } from '@angular/http'; 
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { DetailsPage } from '../pages/details/details';
import { InscriptionPage } from '../pages/inscription/inscription';
import { DrugsList } from '../pages/drugs-list/drugs-list';
import { TabsPage } from '../pages/tabs/tabs';
import { Users } from '../pages/services/userIn';
import { Drugs } from '../pages/services/drugs';
import { Times } from '../pages/services/times';
import { LocalNotifications } from '@ionic-native/local-notifications';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DetailsPage,
    InscriptionPage,
    DrugsList
    
    
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DetailsPage,
    InscriptionPage,
    DrugsList
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Users,
    Drugs,
    Times,
    LocalNotifications
    ]
})
export class AppModule {}
