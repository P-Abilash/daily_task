import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
 
     const token = this.authService.getAccessToken();

     if(token){
      const autRequest = request.clone({
        setHeaders:{
          Authorization : `headerOfToken ${token}`
        }
      });
      return next.handle(autRequest)
     }
 

    return next.handle(request);
  }
}
