import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  template: `
    <div class="aboutme-header"><p>EXPERIENCE</p></div>
    <ul>
      <li><p class="p-font">Intern Web Developer <i class="cv-i">IBM Hungary Oct 2019 - present</i></p></li>
      <li><p class="p-font">Test Researcher <i class="cv-i">ELTE Lab Budapest Feb 2020-JUL 2020</i></p></li>
      <li><p class="p-font">Team Leader/DevOPS Engineer - Founder of Healthy Fighter APP <i class="cv-i">ELTE Hungary Oct 2019-Jan 2020</i></p></li>
      <li><p class="p-font">Freelancer - IT Support/iOS Developer/Web Design <i class="cv-i">Jan 2015-Jan 2017</i></p></li>
    </ul>
  `,
  styles: [
  ]
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
