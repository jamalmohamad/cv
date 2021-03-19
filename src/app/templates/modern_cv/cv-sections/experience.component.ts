import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-modern-experience-component',
    template: `
        <div class="row">
            <div class="col-md-12 cv-modern-space">
                <h4 class="cv-modern-heading">PROFESSIONAL EXPERIENCE</h4>
                <ul class="timeline">
                    <li>
                        <p class="cv-mod-pos-title">Web Developer</p>
                        <h6 class="float-right" >Oct 2019 - Apr 2021</h6>
                        <h6 class="cv-mod-custom-company-title">IBM</h6>
                            <p class="cv-mod-custom-p">- An Internship position</p>
                            <p class="cv-mod-custom-p">- Thesis Research, the outcome is the implementation of End to End Automation Testing with TestCafé and Typescript</p>
                            <p class="cv-mod-custom-p">- Solving issues for different applications with Typescript/Javascript</p>
                            <p class="cv-mod-custom-p">- Apply Bootstrap for different screen sizes</p>
                            <p class="cv-mod-custom-p">- Agile way of working</p>
                            <p class="cv-mod-custom-p">- Learned how to deal with Git version control different commands</p>
                        
                    </li>
                    <li>
                        <p class="cv-mod-pos-title">Team Leader - Founder of Healthy Fighter Application</p>
                        <h6 class="float-right" >Oct 2019 - Jan 2020</h6>
                        <h6 class="cv-mod-custom-company-title">ELTE</h6>
                        <p class="cv-mod-custom-p">- Lead Team of 5 colleagues, the result is MVP</p>
                        <p class="cv-mod-custom-p">- Handling tasks such us frontend development with Angular and deployment to heroku with CI/CD pipeline.</p>
                        <p class="cv-mod-custom-p">- The project Outcome, https://front-healthy-fighter.herokuapp.com/#/login</p>
                        <p class="cv-mod-custom-p">- use</p>

                    </li>
                    <li>
                        <p class="cv-mod-pos-title">Engineer/Freelancer</p>
                        <h6 class="float-right" >Jan 2015 - Jan 2017</h6>
                        <h6 class="cv-mod-custom-company-title">ENTREPRENEURSHIP</h6>
                        <p class="cv-mod-custom-p">- Developed a local iOS Movie Streaming Application for an ISP.</p>
                        <p class="cv-mod-custom-p">- Designing Web pages with Bootstrap</p>
                        <p class="cv-mod-custom-p">- IT support/Help desk freelancer</p>
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
