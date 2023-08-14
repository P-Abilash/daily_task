import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//  merge apis 
constructor(private http: HttpClient) {}


getFirstApiData(): Observable<any> {
  return this.http.get('http://localhost:3000/data');
}

getSecondApiData(): Observable<any> {
  return this.http.get('http://localhost:3000/data');
}

 
 // httpinterceptor 
 private accessToken: string = '';

 setAccessToken(token: string) {
   this.accessToken = token;
 }

 getAccessToken(): string {
  console.log('Getting Access Token:', this.accessToken);
   return this.accessToken;
 }

  isUserLoggedIn(){
    // return false;
    return !!this.accessToken; 
  }
}


