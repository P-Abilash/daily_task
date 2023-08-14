import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareComponent } from './share/share.component';
import { AngmetComponent } from './angmet/angmet.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { CrudComponent } from './crud/crud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BehavioursubComponent } from './behavioursub/behavioursub.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './guard/auth.guard';
import { ChildGuard } from './guard/child.guard';
import { User1Component } from './user1/user1.component';
import { User2Component } from './user2/user2.component';
import { BooksComponent } from './books/books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { ResolveGuard } from './guard/resolve.guard';
import { RouterModule } from '@angular/router';
import { DeactivateComponent } from './deactivate/deactivate.component';
import { CandeactivateGuard } from './guard/candeactivate.guard';
import { InterceptorInterceptor } from './interceptor/interceptor.interceptor';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    ShareComponent,
    AngmetComponent,
    CrudComponent,
    BehavioursubComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    User1Component,
    User2Component,
    BooksComponent,
    BookDetailsComponent,
    DeactivateComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorInterceptor,
    multi: true,
  },
    ReactiveFormsModule, HttpClientModule, AuthGuard, ChildGuard, ResolveGuard, RouterModule, AppRoutingModule, CandeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
