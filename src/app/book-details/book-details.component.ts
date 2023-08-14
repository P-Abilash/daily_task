import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-book-details',
  template: `
    <p>
      book-details works!
    </p>
    <h2>Book Detail</h2>
    <div *ngIf="book">
      <p><strong>Title:</strong> {{ book.title }}</p>
      <p><strong>Author:</strong> {{ book.author }}</p>
    </div>


   
  `,
  styles: [
  ]
})
export class BookDetailsComponent implements OnInit {
  book: any;
  


  constructor(private route: ActivatedRoute, private http: HttpClient, private apiService: AuthService) {}

  ngOnInit() {
    this.book = this.route.snapshot.data['book'];
    console.log('Resolved data:', this.book);

  }
   
 

}