import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngmetComponent } from './angmet/angmet.component';
import { BehavioursubComponent } from './behavioursub/behavioursub.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BooksComponent } from './books/books.component';
import { CrudComponent } from './crud/crud.component';
import { DeactivateComponent } from './deactivate/deactivate.component';
import { AuthGuard } from './guard/auth.guard';
import { CandeactivateGuard } from './guard/candeactivate.guard';
import { ChildGuard } from './guard/child.guard';
import { ResolveGuard } from './guard/resolve.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ShareComponent } from './share/share.component';
import { UserComponent } from './user/user.component';
import { User1Component } from './user1/user1.component';
import { User2Component } from './user2/user2.component';

const routes: Routes = [
  {path: 'share', component:ShareComponent },
  {path: 'angmet', component: AngmetComponent},
  {path: 'crud', component:CrudComponent},
  {path: 'bsub', component:BehavioursubComponent},
  
  // canActivateGuard
  {
   path: 'home' , component:HomeComponent,
   canActivate:[AuthGuard]
  },


  // canActivateChild
  {path: 'user/:id' , component:UserComponent,
   canActivateChild: [ChildGuard],
   children:[
    {path: 'user1', component: User1Component},
    {path: 'user2', component: User2Component},

   ]
   },

   //resolve guard
   {path: 'books', component: BooksComponent},
  {
    path: 'books/:id',
    component: BookDetailsComponent,
    resolve: {book: ResolveGuard}

  },

  // candeactive
  {
    path: 'unsaved',
    component: DeactivateComponent,
    canDeactivate: [CandeactivateGuard]
  },
  { path: '', redirectTo: '/unsaved', pathMatch: 'full' },
  {path: 'login' , component:LoginComponent },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
