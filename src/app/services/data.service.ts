import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private apiUrl = 'https://api.api-ninjas.com/v1/quotes'; 
  private apiKey = 'Qay0HdA07Fn2XKwL5Osm0A==QQ2EBXU7m67Fuc3N'; //to access api

  constructor(private httpClient:HttpClient) { }

    GetQuoteData(): Observable<any> {
      const headers = new HttpHeaders({
        'X-Api-Key': this.apiKey //put api key as a header
      });
  
      // make the GET request with the headers
      return this.httpClient.get(this.apiUrl, { headers });
     
    }
}
