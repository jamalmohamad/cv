import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  template: `
     <div class="aboutme-header"><p>SKILLS <i class="cv-i"><i class="fa fa-tasks" aria-hidden="true"></i></i></p></div>
     <div class="row">
       <div class="col-md-12">
         <ul>
             <li class="p-font">Agile</li>
             <li class="p-font">ES6 JavaScript/Typescript</li>
             <li class="p-font">Java / JavaEE</li>
             <li class="p-font">React (learning phase)</li>
             <li class="p-font">Angular 6+</li>
             <li class="p-font">Spring Boot</li>
             <li class="p-font">SPA</li>
             <li class="p-font">TestCafé</li>
             <li class="p-font">Cucumber</li>
             <li class="p-font">GraphQL (learning phase)</li>
             <li class="p-font">PostgreSQL</li>
             <li class="p-font">MongoDB (familiar)</li>
             <li class="p-font">Git/Github/Gitlab</li>
             <li class="p-font">Ubuntu/MacOSX</li>
             <li class="p-font">MS office</li>
             <li class="p-font">Libre Office</li>
             <li class="p-font">LaTex</li>
             <li class="p-font">OOP</li>
             <li class="p-font">BPM/LDM</li>
             <li class="p-font">TDD/BDD</li>
             <li class="p-font">Invision app</li>
             <li class="p-font">NPM/NVM</li>
             <li class="p-font">Heroku</li>
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
