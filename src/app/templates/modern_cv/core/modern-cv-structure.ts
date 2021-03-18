import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-modern-cv-structure',
    template: `
        <div class="book">
            <div class="page" size="A4">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <img src="/assets/meme.jpeg" alt="Avatar" style="width:200px; border-radius: 100px" height="200px" class="cv-modern-img">
                            <app-modern-cv-profile></app-modern-cv-profile>
                            <app-modern-personal-details></app-modern-personal-details>
                        </div>
        
                        <div class="col-md-8">
                            <app-modern-name-component></app-modern-name-component>
                            <app-modern-experience-component></app-modern-experience-component>

                        </div>
                    </div>
                    
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
