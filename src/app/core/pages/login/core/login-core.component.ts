import { Component, OnInit } from "@angular/core";



@Component({
    selector: 'app-login-core-component',
    template: `
        
        <h2>login core</h2>
        <app-login-component></app-login-component>
    `
})

export class AppLoginCoreComponent implements OnInit {


    ngOnInit() {
    }
}
