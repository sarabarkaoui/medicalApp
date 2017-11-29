import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class Users {
  adress="http://localhost:8080/api/users/";
  data: any;
 
  constructor(public http: Http) {
    this.data = null;
  }
 
  getUser(use){
 
    if (this.data) {
      return Promise.resolve(this.data);
    }
 
    return new Promise(resolve => {
 
      this.http.get(this.adress+use)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
 
  }
 
  createUser(user){
 
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
 
    this.http.post(this.adress, JSON.stringify(user), {headers: headers})
      .subscribe(res => {
        console.log(res.json());
      });
 
  }
 
}