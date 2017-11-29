import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, Validators,FormGroup } from "@angular/forms";
import {Users} from '../services/userIn';
@Component({
  selector: 'page-inscription',
  templateUrl: 'inscription.html'
})
export class InscriptionPage {
  Form: FormGroup;
  userId : any;
  password : any;

  constructor(public navCtrl: NavController ,public _form: FormBuilder,public user :Users) {
    this.Form=this._form.group({
      "userId":[" ",Validators.required],
      "password":[" ",Validators.required]
      

    })
    console.log("the page is loaded !!")

  }
  signUp(){
    let obj = {
      userId: this.userId,
      password: this.password
    };
    console.log(obj);
    this.user.createUser(obj); 
  }
}