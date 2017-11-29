import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class Drugs {
  adress="http://localhost:8080/api/drugs/";
  data: any;
  currentDrug : any;
 
  constructor(public http: Http) {
    this.data = null;
  }
  getDrug(id){
    /* if (this.data) {
      return Promise.resolve(this.data);
    }*/
 
    return new Promise(resolve => {
 
      this.http.get(this.adress+id)
        .map(res => res.json())
        .subscribe(data => {
          this.data=data;
          resolve(this.data);
        });
    });
  }
  
  getDrugs(){
 
   /* if (this.data) {
      return Promise.resolve(this.data);
    }*/
 
    return new Promise(resolve => {
 
      this.http.get(this.adress)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
 
  }
 
  createDrug(drug){
    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new Promise(resolve => {
    this.http.post(this.adress, JSON.stringify(drug), {headers: headers}).map(res => res.json())
      .subscribe(data => {
        console.log("data");
        console.log(data);
       
        this.currentDrug=data;
        resolve(this.currentDrug);
      });
       
  });
}
}
