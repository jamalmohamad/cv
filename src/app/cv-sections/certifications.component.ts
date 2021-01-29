import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certifications',
  template: `
      <div class="aboutme-header"><p>CERTIFICATIONS</p></div>
      <ul>
          <li><p class="p-font">BEng in Computer Technique<i class="cv-i">Bachelor certificate</i></p></li>
          <li><p class="p-font">Basic German level A1.1.1 <i class="cv-i">Goethe Institute</i></p></li>
          <li><p class="p-font">IELTS B1 level <i class="cv-i">British Council</i></p></li>
          <li><p class="p-font">What is Agile?<i class="cv-i">IBM</i></p></li>
          <li><p class="p-font">Privacy Training <i class="cv-i">IBM</i></p></li>
          <li><p class="p-font">Introduction to Openshift DO101<i class="cv-i">Red Hat</i></p></li>
          <li><p class="p-font">ES6<i class="cv-i">Udemy</i></p></li>

    </ul>
  `,
  styles: [
  ]
})
export class CertificationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
