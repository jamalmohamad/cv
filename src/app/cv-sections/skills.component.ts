import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  template: `
     <div class="aboutme-header"><p>SKILLS <i class="cv-i"><i class="fa fa-tasks" aria-hidden="true"></i></i></p></div>
     <div class="row">
       <div class="col-md-12">
           <p>Stack</p>
           <ul>
             <li class="p-font">Agile</li>
             <li class="p-font"><b>Java / JavaEE</b></li>
             <li class="p-font"><b>Spring Boot</b></li>
             <li class="p-font">ES6 JavaScript/Typescript</li>
             <li class="p-font"><b>Angular 6+</b></li>
             <li class="p-font">SPA</li>
             <li class="p-font"><b>TestCafé</b></li>
             <li class="p-font"><b>Cucumber (BDD)</b></li>
               <li class="p-font"><b>TravisCI</b></li>
             <li class="p-font"><b>Git/Github/Gitlab</b></li>
             <li class="p-font">Ubuntu/MacOSX</li>
             <li class="p-font">Heroku</li>
         </ul>
         
       </div>
     </div>

     <div class="aboutme-header"><p>OTHER SKILLS <i class="cv-i"><i class="fa fa-tasks" aria-hidden="true"></i></i></p></div>
     <div class="row">
         <div class="col-md-12">
             <ul>
                 <li class="p-font">PostgreSQL</li>
                 <li class="p-font">MongoDB (familiar)</li>
                 <li class="p-font">MS office</li>
                 <li class="p-font">Libre Office</li>
                 <li class="p-font">LaTex</li>
                 <li class="p-font">OOP</li>
                 <li class="p-font">BPM/LDM</li>
                 <li class="p-font">TDD/BDD</li>
                 <li class="p-font">Invision app</li>
                 <li class="p-font">NPM/NVM</li>
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
