import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  apiUrl = environment.apiUrl
  constructor(private http:HttpClient) { }

  get_trainers(){
   return this.http.get(this.apiUrl+"trainer/index");
  }
  delete_trainer(id){
    return this.http.delete(this.apiUrl+"trainer/delete?id="+id);
  }
  add_trainer(trainer){
    return this.http.post(this.apiUrl+"user/create", trainer)
  }
  delete_session(id){
    return this.http.delete(this.apiUrl+"session/delete?id="+id)
  }
  get_locations(){
    return this.http.get(this.apiUrl+"locations")
  }
  add_session(session){
    return this.http.post(this.apiUrl+"session/create", session)
  }

}
