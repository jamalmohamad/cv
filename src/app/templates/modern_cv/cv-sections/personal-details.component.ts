import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-modern-personal-details',
    template: `
        <div class="row cv-custom-profile">
            <div class="col-md-12">
                <h4 class="cv-modern-heading">PERSONAL DETAILS</h4>
               <!-- <h6 class="cv-mod-pos-title">Nationality</h6>
                <p>IRAQI - BAGHDAD</p>-->

                <h6 class="cv-mod-pos-title">Address</h6>
<!--
                <p>Bulcsú utca 23 Budapest - Hungary</p>
-->
                <p>Budapest - Hungary</p>
            </div>
        </div>
    `
})


export class AppModernPersonalDetailsComponent implements OnInit{

    constructor() {

    }

    ngOnInit(){


    }


}
