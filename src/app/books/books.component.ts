import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ResolveService } from '../services/resolve.service';

@Component({
  selector: 'app-books',
  template: `
    <p>
      books works!
    </p>
    <h2>Book List</h2>
    <h3>resolve guard example</h3>
    <ul>
      <li *ngFor="let book of books">
        <a [routerLink]="['/books', book.id]">{{ book.title }}</a>
      </li>
    </ul>

     <h2>Merged API Responses</h2>
    <ul>
      <li *ngFor="let item of mergedData">{{ item | json }}</li>
    </ul>
  `,
  styles: [
  ]
})
export class BooksComponent implements OnInit {
  books: any[] = [];
   mergedData: any[] = [];
 

  constructor(private bookService: ResolveService , private http: HttpClient, private apiService: AuthService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
    });
        this.loadData();
         

  }
  loadData() {
    const firstApi$ = this.apiService.getFirstApiData();
    const secondApi$ = this.apiService.getSecondApiData();
    
    forkJoin([firstApi$, secondApi$]).subscribe(
      ([firstResponse, secondResponse]) => {
        console.log('first', firstResponse);
        console.log('second', secondResponse);
        
        if (firstResponse && secondResponse) {
          // Merge the objects directly
          this.mergedData = [firstResponse, secondResponse];
          console.log('merge', this.mergedData);
        } else {
          console.error('Failed to merge API responses.');
        }
      },
      error => {
        console.error('Error fetching API data:', error);
      }
    );
  }
  

}
