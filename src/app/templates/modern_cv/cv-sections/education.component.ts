import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-mod-education-component',
    template: `
        <div class="row cv-mod-custom-row">
            <div class="col-md-12">
                <h4 class="cv-modern-heading">EDUCATION</h4>
                <ul class="timeline">
                    <li>
                        <p class="cv-mod-pos-title">MSc in Computer Science, Specialization in Software and Service Architecture</p>
                        <h6 class="float-right" >Feb 2019 - Present</h6>
                        <h6 class="cv-mod-custom-company-title">EÖTVÖS LORÁND UNIVERSITY (ELTE) BUDAPEST</h6>
                    </li>

                    <li>
                        <p class="cv-mod-pos-title">MSc in Computer Science, Specialization in AI</p>
                        <h6 class="float-right" >Dec 2018 - Jan 2019</h6>
                        <h6 class="cv-mod-custom-company-title">PÉCSI TUDOMANYEGYTEM PÉCS-HUNGARY</h6>
                    </li>

                    <li>
                        <p class="cv-mod-pos-title">Bachelor of ENG. in Computer Technique</p>
                        <h6 class="float-right" >2010 - 2014</h6>
                        <h6 class="cv-mod-custom-company-title">DIJLA UNIVERSITY COLLEGE BAGHDAD</h6>
                    </li>
                </ul>
            </div>
        </div>
    `
})


export class AppModEducationComponent implements OnInit {
    constructor() {

    }

    ngOnInit() {
    }

}
