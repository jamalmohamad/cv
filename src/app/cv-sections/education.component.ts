import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  template: `
      <div class="aboutme-header"><p>EDUCATION</p></div>
      <ul>
          <li><p class="p-font">MSc in Computer Science, Specialization in Software and Service Architecture, Feb 2019 - July 2021 <i class="cv-i">Eötvös Loránd University (ELTE) (Budapest)</i></p></li>
          <li><p class="p-font">MSc in Computer Science, Specialization in AI, Pécsi Tudományegytem <i class="cv-i">Dec 2018 - Jan 2019 (Pécs)</i></p></li>
          <li><p class="p-font">BEng in Computer Technique Engineering, Dijla University college  <i class="cv-i">Baghdad-Iraq</i></p></li>
      </ul>
  `,
  styles: [
  ]
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
