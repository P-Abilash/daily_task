import { Component } from '@angular/core';

@Component({
  selector: 'app-deactivate',
  template: `
    <p>
      deactivate works!
    </p>
    <h2>Unsaved Changes</h2>
    <input [(ngModel)]="data" placeholder="Enter data" />
    <p>Current Data: {{ data }}</p>


    <a routerLink="/books" routerLinkActive="active">Books</a>

  `,
  styles: [
  ]
})
export class DeactivateComponent {
  data: string = '';

}
