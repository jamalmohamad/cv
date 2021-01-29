import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-contact',
  template: `
    <section>
      <div class="row">
        <div class="col-md-12">
          <div class="aboutme-header"><p>ABOUT ME</p></div>
          <div class=""><p class="p-font">Hello! My Name is Mohammed, I have 2 years experience in Development, 
            I love to work with a Team in an Agile way, I am motivated to learn and share ideas. 
              My problem solving skills is developing day by day, 
              as a junior developer I can transfer the UX design to real frontend application using HTML5,SCSS and from backend side I can create a REST API (CRUD) operations with Java/NodeJS.
              Some facts about me I am honest and hard-worker.
          </p></div>
        </div>
      </div>
    </section>
  `,
  styles: [
  ]
})
export class AboutContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
