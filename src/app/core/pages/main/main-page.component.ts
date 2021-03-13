import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-main-page',
    template: `
        <div class="container-fluid">
            <div class="row cv-custom-row">
                <div class="col-md-12">
                    <h1>Welcome To CV Maker App</h1>
                    <a routerLink="/gallery" routerLinkActive="active"><button class="btn btn-warning" style="margin-left: 0; width: 15rem; height: 3rem;">Templates</button></a>
                    <a routerLink="/login" routerLinkActive="active"><button class="btn btn-danger" style="margin-left: 1rem; width: 15rem; height: 3rem;">Login</button></a>
                </div>
                <!-- plan to put cv cheat cheet or instructions for do and no not -->
                
            </div>
        </div>
        
    `
})

export class MainPageComponent implements OnInit{
    ngOnInit() {
    }
}
