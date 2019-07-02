import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl=environment.apiUrl;
  constructor(private http:HttpClient) { }

  public login(user){
   return this.http.post(this.baseUrl+'user/authenticate',user)
  }
  public set_token(data){
    localStorage.setItem("token", data)
  }
  public get_token(): string{
    return localStorage.getItem("token")
  }
  public logout(){
   // environment.token=null;
  }

}
