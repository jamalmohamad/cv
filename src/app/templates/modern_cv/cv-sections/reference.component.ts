import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-mod-reference-component',
    template: `
        <div class="row cv-custom-profile">
            <div class="col-md-12">
                <h4 class="cv-modern-heading">REFERENCE</h4>
                 <h6 class="cv-mod-pos-title">Reale Anna</h6>
                 <p>MSc and TA</p>
<!--
                 <p><i class="fas fa-envelope"></i> anna.reale@inf.elte.hu</p>
-->
            </div>
        </div>
    `
})


export class AppModReferenceComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
