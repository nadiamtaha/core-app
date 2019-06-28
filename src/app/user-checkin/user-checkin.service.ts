import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserCheckinService {
  apiUrl = environment.apiUrl
  constructor(private http:HttpClient) { }
  
  public getAllUsers(pageNumber?,sessionId?) {
  
    return this.http.get(this.apiUrl+'user/index', {params : {'page':pageNumber,'session_id':sessionId} });
  }
  public getAllSessions() {
   
    return this.http.get(this.apiUrl+'session/filter_Sessions');
  }

  public checkInUserManually(sessionId,users){
    return this.http.put(this.apiUrl+'user/attend',{'session_id':sessionId,'users':users});
  }
  
  public checkInUserbyScan(sessionId,code){
    return this.http.put(this.apiUrl+'user/attend',{'session_id':sessionId,'code':code});
  }
  public deleteUser(id){
    return this.http.delete(this.apiUrl+'user/delete?id='+id);
  }
  public addUser(user){
    return this.http.post(this.apiUrl+'user/create',user);
  }
}
