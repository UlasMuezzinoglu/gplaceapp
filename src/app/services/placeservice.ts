import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Place } from '../models/place';

@Injectable({
    providedIn: 'root'
  })
export class PlaceService {
    apiUrl = "http://localhost:8070/getPlaces?"
    constructor(private httpClient:HttpClient) { }

    /*getPlaces() : Observable<Place>{
        let newPath = this.apiUrl + "latitude=36.906132&longitude=30.683880&radius=1500"
        return this.httpClient.get<Place>(newPath);
      }*/
      getPlaces() {
        
      }
}