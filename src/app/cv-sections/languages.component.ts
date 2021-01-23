import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages',
  template: `
    <div class="aboutme-header"><p>LANGUAGES</p></div>
    <ul>
      <li><p class="p-font">English</p></li>
      <li><p class="p-font">Arabic</p></li>
      <li><p class="p-font">Hungarian</p></li>
      <li><p class="p-font">German</p></li>
    </ul>
  `,
  styles: [
  ]
})
export class LanguagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
