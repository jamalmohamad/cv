import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--<app-cv-structure></app-cv-structure>-->
<!--
    <app-modern-cv-structure></app-modern-cv-structure>
-->
    <!--<app-main-page></app-main-page>-->
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'CV - Mohammed Jamal';
}
