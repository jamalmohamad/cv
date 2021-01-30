import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  template: `
      <div class="aboutme-header"><p>EDUCATION <i class="cv-i"><i class="fas fa-book-reader"></i></i></p></div>
      <ul>
          <li><p class="p-font">MSc in Computer Science, Specialization in Software and Service Architecture, Feb 2019 - Feb 2022 </p><p><i class="cv-i p-font">Eötvös Loránd University (ELTE) (Budapest)</i></p></li>
          <li><p class="p-font">MSc in Computer Science, Specialization in AI, Dec 2018 - Jan 2019 Pécsi Tudományegytem (Pécs)</p></li>
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
