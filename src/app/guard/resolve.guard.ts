import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ResolveService } from '../services/resolve.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<any> {
  constructor(private bookService: ResolveService) {}

  

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const bookId = +route.paramMap.get('id')!; // Use the non-null assertion operator
    console.log('Resolving book with ID:', bookId);

    if (isNaN(bookId)) {
      // Handle invalid ID gracefully
      return of(null);
    }
  
    return this.bookService.getBookById(bookId).pipe(
      catchError(() => {
        // Handle error fetching book data gracefully
        return of(null);
      })
    );
  }
  
}
