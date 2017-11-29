import { Component,Inject } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {Drugs} from '../services/drugs';
import {Times} from '../services/times';
import {DrugsList} from '../drugs-list/drugs-list'
//import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {
  static get parameters() {
  return [[NavController], [NavParams],[Drugs],[Times]];
       //return [[NavParams],[Drugs]];
  }
   ownerId : any;
   name : string;
   description : any;
   debutDate : String;
   duration :number;
   nbrTimes : number;
   arr=Array;
   drugs :any;
   times : any;
   timesInput : Array<String>;
   d : any;

constructor(public navCtrl,navParams,drugs,times) {
    //this.arr = Array();
    this.ownerId=navParams.get('userID'); 
    this.drugs=drugs; 
    this.times=times;
    this.nbrTimes=1;
    this.timesInput=Array<String>(this.nbrTimes);
    

  }
  private updateInputs(){
       console.log(this.nbrTimes);
     this.timesInput.length=this.nbrTimes;
  }
  
  private addDrug(){
     
    let drug = {
        drugName : this.name,
        description : this.description,
        ownerId : this.ownerId,
        debutDate : this.debutDate,
        duration : this.duration,
        nbrTimes : this.nbrTimes
  }
      console.log(drug);
      let instance : DetailsPage = this;
      this.drugs.createDrug(drug).then((data) => {
      console.log("----------");
      console.log(data);
      instance.d = data;
       console.log("-+-+-+-+");
      console.log(instance.d[0]["_id"]);
      for(var i=0;i<this.nbrTimes;i++){
      let timer= {
        timeD : this.timesInput[i],
        medecineId : instance.d[0]._id
      }
      console.log(timer);
      this.times.createTime(timer);
      //this.times.push(timer);
      //this.tim
    }
    //console.log(this.times);
  });
  this.navCtrl.push(DrugsList);
     /* console.log("*******");
      console.log(instance.d);
      //this.d=instance.d;
      for(var i=0;i<this.nbrTimes;i++){
        console.log(instance.d);
      let timer= {
        medecineId : d._id,
        timeD : this.timesInput[i]
      }
      console.log(timer);
      this.times.createTime(timer);
      //this.times.push(timer);
      //this.tim
    }
    console.log(this.times);
      //this.navCtrl.push(DrugsList);*/
  }

}