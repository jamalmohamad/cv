import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-modern-cv-profile',
    template: `
        <div class="row cv-custom-profile">
            <div class="col-md-12">

            <h4 class="cv-modern-heading">PROFILE</h4>
            <p>A developer with 2 years experience in Java, JavaScript, HTML5, CSS3, Spring Boot and Angular6+</p>

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
