import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  template: `
     <div class="aboutme-header"><p>SKILLS</p></div>
     <div class="row">
       <div class="col-md-12">
         <ul>
             <li>Agile</li>
             <li>JavaScript/Typescript</li>
             <li>Java</li>
             <li>Angular 6+</li>
             <li>Spring Boot</li>
             <li>SPA</li>
             <li>TestCafé</li>
             <li>Cucumber</li>
             <li>PostgreSQL</li>
             <li>MongoDB (familiar)</li>
             <li>Git/Github/Gitlab</li>
             <li>Ubuntu/MacOSX</li>
             <li>MS office</li>
             <li>Libre Office</li>
             <li>LaTex</li>
             <li>OOP</li>
             <li>BPM/LDM</li>
             <li>TDD/BDD</li>
             <li>Invision app</li>
             <li>NPM/NVM</li>
             <li>Heroku</li>
             
         
         </ul>
         
       </div>
     </div>
     
   
  `,
  styles: [
  ]
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
