import { Component,  Input, OnInit, OnChanges, DoCheck, OnDestroy  } from '@angular/core';

interface User {
  username: string;
  email: string;
 
}

@Component({
  selector: 'app-lifecycle',
  template: `
  <h1>lifecycle hooks
  </h1>
    <div class="user-profile" *ngIf="user">
      <h2>Welcome, {{ user.username }}!</h2>
      <p>Email: {{ user.email }}</p>
      <button (click)="logout()">Log Out</button>
    </div>
    <div class="auth-form" *ngIf="!user">
      <input [(ngModel)]="username" placeholder="Username" /> <br>
      <input [(ngModel)]="email" placeholder="Email" /> <br>
      <button (click)="login()">Log In</button>
    </div>
  `,
  styles: [
  ]
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, OnDestroy {

  @Input() user!: User | null; 
  username!: string;
  email!: string;

  constructor() {
    console.log('Constructor called');
  }

  ngOnChanges() {
    
    console.log('ngOnChanges called');
    //React to changes in the 'user' input property
     console.log('User input changed:', this.user);
  }
  ngOnInit() {
    console.log('ngOnInit called');
    this.user = { username: 'Abilash' , email:  'abi@gmail.com' };
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
     if (!this.username || !this.email) {
      console.log('Validation error: Username and email are required');
    }
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
     this.logout();
  }

  login() {
    if (this.username && this.email) {
      this.user = { username: this.username, email: this.email };
    }
  }

  logout() {
    this.user = null;
    this.username = '';
    this.email = '';
  }


}
