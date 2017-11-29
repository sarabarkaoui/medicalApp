import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class Times {
  adress="http://localhost:8080/api/times/";
  data: any;
 
  constructor(public http: Http) {
    this.data = null;
  }
  getTime(time){
     if (this.data) {
      return Promise.resolve(this.data);
    }
 
    return new Promise(resolve => {
 
      this.http.get(this.adress+time)
        .map(res => res.json())
        .subscribe(data => {
          //console.log("********: "+data);
          resolve(data);
        });
    });
  }
 getTimes1(){
 
    if (this.data) {
      return Promise.resolve(this.data);
    }
 
    return new Promise(resolve => {
 
      this.http.get(this.adress)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
 
  }
  getTimes(medicine){
 
    if (this.data) {
      return Promise.resolve(this.data);
    }
 
    return new Promise(resolve => {
 
      this.http.get(this.adress+medicine)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
 
  }
 
  createTime(time){
    console.log("servicetimer");
    console.log(time);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
 
    this.http.post(this.adress, JSON.stringify(time), {headers: headers})
      .subscribe(res => {
        console.log(res.json());
      });
 
  }
 
}