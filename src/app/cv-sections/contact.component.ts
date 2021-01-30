import { Component, OnInit } from '@angular/core';
import { faCoffee, faMobile, faBlog, faLink, faLocationArrow } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  template: `
    <div class="contact-header"><p>CONTACT<i class="cv-i"><i class="fas fa-address-book"></i></i></p></div>
    <p class="p-font">jamalmohamad.ik@gmail.com <i class="cv-i"><i class="fas fa-envelope"></i></i></p>
    <p class="p-font">github.com/jamalmohamad <i class="cv-i"><i class="fab fa-github"></i></i></p>
    <p class="p-font">jamalmohamad.github.io <i class="cv-i"><fa-icon [icon]="faLink"></fa-icon></i></p>
    <p class="p-font">linkedin.com/in/mo-j-7b8044173/ <i class="cv-i"><i class="fab fa-linkedin-in"></i></i></p>
    <p class="p-font">(+36) 20 434-6954 <i class="cv-i"><fa-icon [icon]="faMobile"></fa-icon></i></p>
    <p class="p-font">Nationality :Iraqi from Baghdad</p>
  `,
  styles: [
  ]
})
export class ContactComponent implements OnInit {
  faCoffee = faCoffee;
  faMobile = faMobile;
  faBlog = faBlog;
  faLink = faLink;
  faLocationArrow = faLocationArrow;

  constructor() { }

  ngOnInit(): void {
  }

}
