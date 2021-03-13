import {Component, OnInit} from '@angular/core'

@Component({
    selector: 'app-galary-pages',
    template: `
    
        
        
        <div class="container">
            <div class="row">
                <h2>Templates Gallery</h2>
            </div>
            <div class="row cv-custom-row ">
                <div class="col-md-6">
                    <div class="cv-custom-img">
                        <img src="https://mobirise.com/bootstrap-gallery/assets1/images/photo-1440658172029-9d9e5cdc127c-1426x863.jpg" width="315rem" height="315rem"/>
                    </div>
                    <div class="cv-custom-img2">name, view, download</div>
                </div>
                <div class="col-md-6">
                    <div class="cv-custom-img">
                        <img src="https://mobirise.com/bootstrap-gallery/assets1/images/photo-1472345113808-03a78a564cc5-1353x899.jpg" width="315rem" height="315rem"/>
                    </div>
                    <div class="cv-custom-img2">name, view, download</div>
                </div>
            </div>
        </div>
    `
})

export class AppGalaryComponent implements OnInit{

    ngOnInit() {
    }
}
