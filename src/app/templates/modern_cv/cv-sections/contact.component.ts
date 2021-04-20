import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-mod-contact-component',
    template: `
        <div class="row cv-custom-profile">
            <div class="col-md-12">
                <h4 class="cv-modern-heading">CONTACT</h4>
                <!-- <h6 class="cv-mod-pos-title">Nationality</h6>
                 <p>IRAQI - BAGHDAD</p>-->

                <p><i class="fas fa-envelope"></i>  jamalmohamad.ik@gmail.com</p>
                <p><i class="fas fa-phone"></i>  +36 20 434 6954</p>
                <p><i class="fab fa-linkedin"></i> linkedin.com/in/mo-j-7b8044173/</p>
                <p> <i class="fab fa-github"></i> github.com/jamalmohamad</p>
                <p> <i class="fa fa-globe"></i> https://jamalmohamad.netlify.app/</p>
            </div>
        </div>
    `
})

export class AppModContactComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
