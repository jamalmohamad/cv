import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-modern-cv-profile',
    template: `
        <div class="row cv-custom-profile">
            <div class="col-md-12">

            <h4 class="cv-modern-heading">PROFILE</h4>
            <p>Javascript Developer with 2 years experience. Interested in front-end technologies HTML5/CSS3, Bootstrap, Angular, NgRx/Redux and back-end technologies ExpressJS, JWT, MongoDB, Mocha, Sinon, Chai, unit test and Integration testing plus an End-to-End Automation testing with Cucumber and TestCafé.</p>

        </div>
        </div>
    
    `
})

export class ProfileComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
