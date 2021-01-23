import { Component, OnInit } from '@angular/core';
import { faCoffee, faMobile, faBlog, faLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  template: `
    <div class="contact-header">Contact</div>
    <p class="p-font"><fa-icon [icon]="faLink"></fa-icon> jamalmohamad.github.io</p>
    <p class="p-font"><i class="fab fa-linkedin-in"></i> linkedin.com/in/mohamad-7b8044173</p>
    <p class="p-font">Github :github.com/jamalmohamad</p>
    <p class="p-font"><fa-icon [icon]="faMobile"></fa-icon> (+36) 20 434-6954</p>
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
  constructor() { }

  ngOnInit(): void {
  }

}
