import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MapService {
  apiUrl = environment.apiUrl
  constructor(private http:HttpClient) { }
  
  public getAllMapMarkers() {
    return this.http.get(this.apiUrl+'user/locations');
  }

}
