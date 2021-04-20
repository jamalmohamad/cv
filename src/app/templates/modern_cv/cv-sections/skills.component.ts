import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: 'app-mod-skills-component',
    template: `
        <div class="row cv-mod-custom-row2">
            <div class="col-md-12">
                <h4 class="cv-modern-heading">PROFESSIONAL SKILLS (STACK)</h4>
                
                <div class="row ">
                    
                    <div class="col-md-3">
                        <p><i class="fab fa-js"></i> Javascript/ES6</p>
                    </div>

                    <div class="col-md-3">
                        <p><i class="fab fa-html5"></i> HTML</p>
                    </div>

                    <div class="col-md-3">
                        <p><i class="fab fa-css3-alt"></i> CSS3</p>
                    </div>

                    <div class="col-md-3">
                        <p><i class="fab fa-angular"></i> Angular6+</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-3">
                        <p><i class="fas fa-users"></i> Agile</p>
                        

                    </div>

                    <div class="col-md-3">
                        <p><i class="fas fa-check-circle"></i> NodeJS</p>
                    </div>

                    <div class="col-md-3">
                        <p><i class="fas fa-check-circle"></i> MongoDB</p>
                    </div>
                    

                    <div class="col-md-3">
                        <p><i class="fas fa-check-circle"></i> ExpressJS</p>
                    </div>

                    
                </div>

                <div class="row">
                    <div class="col-md-3">
                        <p><i class="fab fa-git-square"></i> git</p>


                    </div>

                    <div class="col-md-3">
                        <p><i class="fab fa-ubuntu"></i> Ubuntu</p>
                    </div>

                    <div class="col-md-3">
                        <p><i class="fas fa-check-circle"></i> TDD/BDD</p>
                    </div>

                    <div class="col-md-3">
                        <p><i class="fas fa-check-circle"></i> OOP</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-3">
                        <p><i class="fas fa-check-circle"></i> TravisCI</p>


                    </div>

                    <div class="col-md-3">
                        <p><i class="fas fa-check-circle"></i> Heroku</p>
                    </div>

                    <div class="col-md-3">
                        <p><i class="fas fa-check-circle"></i> TypeScript</p>
                    </div>

                    <div class="col-md-3">
                        <p><i class="fas fa-check-circle"></i> Mocha</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-3">
                        <p><i class="fas fa-check-circle"></i> Sinon</p>


                    </div>

                    <div class="col-md-3">
                        <p><i class="fas fa-check-circle"></i> Chai</p>
                    </div>

                    <div class="col-md-3">
                    <p><i class="fas fa-check-circle"></i> Cucumber</p>

                    </div>

                    <div class="col-md-3">
                    <p><i class="fas fa-check-circle"></i> TestCafé</p>

                    </div>
                </div>
                
                

            </div>
        </div>
        
    `
})

export class AppModSkillsComponent implements OnInit {
    faCoffee = faCoffee;


    constructor() {
    }

    ngOnInit() {
    }
}
