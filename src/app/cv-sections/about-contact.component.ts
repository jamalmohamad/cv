import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-contact',
  template: `
    <section>
      <div class="row">
        <div class="col-md-12">
          <div class="aboutme-header"><p> PROFILE <i class="cv-i"><i class="fas fa-user-alt"></i></i></p></div>
          <div class="">
              <p class="p-font">
                  A Developer with 2 years experience in Java, JavaScript, HTML5, CSS3, Spring Boot and Angular6+.
                  
              </p>
          </div>
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
