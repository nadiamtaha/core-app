import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  apiUrl = environment.apiUrl
  constructor(private http:HttpClient) { }
  
  public getAllRequests() {
    return this.http.get(this.apiUrl+'package/request');
  }
 
  public respondRequest(reqId,isApproved){
    return this.http.put(this.apiUrl+'package/request/respond',{'request_id':reqId,'is_approved':isApproved});
  }
 
}
