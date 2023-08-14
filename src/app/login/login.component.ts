import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { response } from 'express';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <p>login works! </p>
    <button (click)="getData()">Get Data</button>
    <div *ngIf="response">
      <h3>Response:</h3>
      <pre>{{ response | json }}</pre>
    </div>
    <div *ngIf="token">
      <h3>Authorization Token:</h3>
      <pre>{{ token }}</pre>
    </div>
  `,
  styles: [
  ]
})
export class LoginComponent {

  response: any;
  token: string = ''; // Initialize the token here
constructor(private http:HttpClient, private authService: AuthService ){}

getData(){
  this.authService.setAccessToken('your_access_token_here');

  this.http.get('http://localhost:3000/data').subscribe(

    
    (response) =>{
      this.response = response;
      this.token = this.authService.getAccessToken();

      console.log('Response of the httpinterceptor', this.token);     
    },
    (error) =>{
        console.log('Error', error);
        
    }
    );
   
}
}
