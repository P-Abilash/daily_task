import { Component } from '@angular/core';

@Component({
  selector: 'app-share',
  template: `
    <p>
      share works!
    </p>
    <div>
  <h2>This is a Shared Component</h2>
  <p>Platform: {{ platform }}</p>
  <button (click)="detectPlatform()">Detect Platform</button>
</div>


  `,
  styles: [
  ]
})
export class ShareComponent {
  platform: string;

  constructor() {
    this.platform = 'Unknown';
  }

  detectPlatform(): void {
    if ((window as any).cordova) {
      this.platform = 'Mobile';
    } else {
      this.platform = 'Web';
    }
  }
  

}
