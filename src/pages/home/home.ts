import { Component,Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { InscriptionPage } from '../inscription/inscription';
import {Users} from '../services/userIn';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
})
export class HomePage {
   public registrationForm:any;
   obj :any;
   userId : any;
   password : any;
  constructor(public navCtrl: NavController ,public _form:FormBuilder,public user : Users) {
    this.registrationForm=this._form.group({
      "userId":[" ",Validators.required],
      "password":[" ",Validators.required]
      

    })

   
  }
  private showdetails()
    {
      
      this.user.getUser(this.userId).then((data) => {
      this.obj = data;
      console.log(this.obj);
      this.validation(this.obj);
      //console.log(this.obj);
      
    });

    //console.log(this.obj);
    // this.navCtrl.push(DetailsPage);
    }
     private inscription()
    {
     this.navCtrl.push(InscriptionPage);
    }
    private validation(_user){
            console.log(_user[0].userId);
            console.log(_user[0]._id);
      //console.log(_user['userId']+'---'+_user['password']);
      if(this.userId==_user[0]["userId"] && this.password==_user[0]["password"]){
            let info = {
              userID : _user[0]._id
            };
            this.navCtrl.push(DetailsPage,info);
      }
      else {this.navCtrl.push(HomePage);}
       }
    
}
