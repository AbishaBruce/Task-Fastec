import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    constructor(private http: HttpClient) { }

     //Common Service Start
    //Get dropdown values from data.JSON
    getFileContent = (fileName) => {
        let apiUrl = './assets/data/' + fileName;
        return this.http.get(apiUrl, { responseType: 'json' });
    }
    //Common Service End

}