import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-mod-languages-component',
    template: `
        <div class="row cv-mod-custom-row2">
            <div class="col-md-12">
                <h4 class="cv-modern-heading">LANGUAGES</h4>
                <div class="row ">

                    <div class="col-md-3">
                        <p class="cv-mod-pos-title">English</p>
                        <h6 class="cv-mod-custom-company-title">IELTS B1</h6>
                    </div>

                    <div class="col-md-3">
                        <p class="cv-mod-pos-title">Arabic</p>
                        <h6 class="cv-mod-custom-company-title">Native</h6>
                    </div>

                    <div class="col-md-3">
                        <p class="cv-mod-pos-title">Hungarian</p>
                        <h6 class="cv-mod-custom-company-title">A1.1.1</h6>
                    </div>

                    <div class="col-md-3">
                        <p class="cv-mod-pos-title">German</p>
                        <h6 class="cv-mod-custom-company-title">A1.1.1</h6>
                    </div>
                </div>
                
            </div>
        </div>
    `
})

export class AppModLangComponent implements OnInit {
    ngOnInit() {
    }

}
