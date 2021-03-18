import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-modern-experience-component',
    template: `
        <div class="row">
            <div class="col-md-12 cv-modern-space">
                <h4 class="cv-modern-heading">PROFESSIONAL EXPERIENCE</h4>
                <ul class="timeline">
                    <li>
                        <p class="cv-mod-pos-title">Web Development Intern</p>
                        <h6 class="float-right" >Oct 2019 - Present</h6>
                        <h6>IBM</h6>
                        
                            <p>- Thesis Research, the outcome is the implementation of End to End Automation Testing with TestCafé and Typescript</p>
                            <p>- Developing different application with TypeScript/JavaScript</p>
                            <p>- Bootstrap 4</p>
                            <p>- Angular 11</p>
                            <p>- TravisCI</p>
                            <p>- Git version control</p>
                        
                    </li>
                    <li>
                        <p>Team Leader/DevOPS Engineer - Founder of Healthy Fighter</p>
                        <h6 class="float-right" >Oct 2019 - Jan 2020</h6>
                        <h6>ELTE</h6>

                        <p>- Thesis Research, the outcome is the implementation of End to End Automation Testing with TestCafé and Typescript</p>
                        <p>- Developing different application with TypeScript/JavaScript</p>
                        <p>- Bootstrap 4</p>
                        <p>- Angular 11</p>
                        <p>- TravisCI</p>
                        <p>- Git version control</p>

                    </li>
                </ul>
            </div>
        </div>
    
    
    `
})


export class AppModernExperienceComponent implements OnInit {


    constructor() {
    }

    ngOnInit() {
    }
}
