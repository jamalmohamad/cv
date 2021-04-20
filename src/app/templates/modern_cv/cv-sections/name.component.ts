import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-modern-name-component',
    template: `
        <div class="row cv-modern-title">
            <div class="col-md-12">
                <h2 class="cv-mod-title"> Mohammed Jamal</h2>
                <h6 class="cv-mod-jobtitle">FULLSTACK DEVELOPER</h6>
            </div>
        </div>

    `
})


export class AppModernNameComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
