import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
     <div class="aboutme-header"><p>PROJECTS</p></div>
    <ol>
      <li><p class="p-font">Implementation of End-To-End Test Automation at IBM <i class="cv-i">Thesis+IBM</i> </p>
      <ul>
        <li><p class="p-font">https://github.com/jamalmohamad/bdd-testcafe-cucumber.git </p></li>
      </ul>
      </li>

      <li><p class="p-font">Healthy Fighter <i class="cv-i">University Project</i></p>
        <ul>
          <li><p class="p-font"> https://front-healthy-fighter.herokuapp.com/#/login </p></li>
          <li><p class="p-font"> username: jamalmohamad, password: TestPassword </p></li>
        </ul>
        </li>

      <li><p class="p-font">Educational Web app <i class="cv-i">University Project</i> </p>
      <ul>
        <li><p class="p-font">https://boiling-meadow-19615.herokuapp.com</p></li>
      </ul>
      </li>

        <li><p class="p-font">CV <i class="cv-i">Personal</i> </p>
            <ul>
                <li><p class="p-font">https://github.com/jamalmohamad/cv</p></li>
                <li>link to cv</li>
                <li>link to admin</li>
            </ul>
        </li>
      
    </ol>
  `,
  styles: [
  ]
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
