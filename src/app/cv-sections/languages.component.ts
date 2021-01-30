import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages',
  template: `
    <div class="aboutme-header"><p> <i class="cv-i"><i class="fas fa-language"></i></i>LANGUAGES</p></div>
    <ul>
      <li><p class="p-font">English <i class="cv-i">B1/B2</i></p></li>
      <li><p class="p-font">Arabic <i class="cv-i">Native</i></p></li>
      <li><p class="p-font"><i class="cv-i">A1.1.1</i>Hungarian</p></li>
      <li><p class="p-font">German <i class="cv-i">A1.1.1</i></p></li>
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
