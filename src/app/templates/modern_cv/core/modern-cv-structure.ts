import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-modern-cv-structure',
    template: `
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <img src="/assets/me2.jpg" alt="Avatar" style="width:200px" height="200px">
                    <app-modern-cv-profile></app-modern-cv-profile>
                </div>

                <div class="col-md-8">
                    MOHAMMED JAMAL
                </div>
            </div>
        </div>
    `
})

export class ModernCVStructure implements OnInit{

    constructor() {
    }

    ngOnInit(): void {
    }
}
