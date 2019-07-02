import { Injectable } from '@angular/core';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private auth_service: AuthService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
    if (localStorage.getItem('currentUser')) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.auth_service.get_token()}`,
        },
      });
    }
    // request = request.clone({
    //   url: environment.base_url + request.url
    // });

    

    return next.handle(request);
  }
}
