import { Component,OnDestroy, OnInit } from '@angular/core';
import { IonicPage, NavController,AlertController} from 'ionic-angular';
import {Drugs} from '../services/drugs';
import {Times} from '../services/times';
import { IntervalObservable } from "rxjs/observable/IntervalObservable";
import { LocalNotifications } from '@ionic-native/local-notifications';


@Component({
  selector: 'page-drugs-list',
  templateUrl: 'drugs-list.html',
})
export class DrugsList implements OnInit, OnDestroy {
   drugs : any;
   private alive: boolean;
  constructor(public navCtrl: NavController,public drugService : Drugs,public timeService : Times,public alertCtrl : AlertController,public localNotifications: LocalNotifications) {
    this.alive=true;
  }

  ionViewDidLoad() {
    this.drugService.getDrugs().then((data) => {
      //console.log(data);
      this.drugs = data;
    });
  }
  ngOnInit() {
    // get our data immediately when the component inits
    this.drugService.getDrugs().then((data) => {
      console.log(data);
    });

    // get our data every subsequent 10 seconds
    IntervalObservable.create(10000)
      .subscribe(() => {
        var date=new Date().toLocaleTimeString('en-US', { hour12: false, 
                                             hour: "numeric", 
                                             minute: "numeric"}).toString();
         console.log(date);                                   
          /*let time= {
        timeD : date
      }  */
        this.timeService.getTime(date).then((data) => {
        // if (data[0]!=null) {
            this.openFilters(data);
            
        // }
    });             
      });
  }
  openFilters(tim) {
    var id="59561d5e8c0c4716480293e5";
    //var id ="5958ed1670af16164ca8f020";
    //console.log(tim[0].medicineId);
    /*this.drugService.getDrugs().then((data) => {
      console.log(data);
      });*/
    this.drugService.getDrug(id).then((data) => {
      console.log(data);
      });
    /*let alert = this.alertCtrl.create({
        title: 'Medecine Time',
        subTitle: data[0].drugName,
        buttons: ['Dismiss']
    });*/
    /*this.localNotifications.schedule({
  id: 1,
  title: 'Medecine Time',
  text: data[0].drugName,
});*/
    //alert.present();
    //});
  }
ngOnDestroy(){
    this.alive = false; // switches your IntervalObservable off
  }
}
