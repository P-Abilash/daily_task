import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolveService {
private books = [
  { id: 1, title: 'Book 1', author: 'Author 1' },
  { id: 2, title: 'Book 2', author: 'Author 2' },
   
]

  constructor() { }

  getBooks():Observable<any[]>{
    return of(this.books);
  }

  getBookById(id:number):Observable<any>{
      const book = this.books.find(b => b.id == id);
      return of(book)
   }
}
