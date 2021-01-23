import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-cv-structure></app-cv-structure>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'CV - Mohammed Jamal';
}
