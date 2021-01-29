import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-structure',
  template: `
    <div class="book">
    <div class="page" size="A4">
      <div class="container">
        <app-name-and-picture></app-name-and-picture>
        <app-about-contact></app-about-contact>
        <div class="row">
          <div class="col-md-8">
              <app-experience></app-experience>
              <app-certifications></app-certifications>
              <app-projects></app-projects>
              <app-education></app-education>

          </div>
          
          <div class="vl col-md-4">
            <app-contact></app-contact>
            <app-languages></app-languages>
            <app-skills></app-skills>
          </div>
        </div>
      </div>
    </div>
    </div>
  `,
  styles: [
  ]
})
export class CvStructureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
