import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable,of as observableOf,throwError } from 'rxjs';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})


export class saveService {

  currentUser:any={};

  currentPsw:any;
  configUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor( private router: Router,private http: HttpClient) { }
  ngOnInit() {   
  }
 
  addApplicationnService(model) {

  
    const bodys = {
      "first":model.FirstName,
         };

    return this.http.post(this.configUrl, bodys);
}

}