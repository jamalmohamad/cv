import { Component, OnInit } from '@angular/core';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-name-and-picture',
  template: `
    <section>
      <div class="row">
        <div class="col-md-9">
            <p class="p-font-1">MOHAMMED JAMAL</p>
            <p class="p-font-2">DEVELOPER</p>

            <p class="p-font-3"><fa-icon [icon]="faLocationArrow"></fa-icon> Budapest - Hungary</p>
        </div>
        <div class="col-md-3"> <img class="img-circle" alt="mohammed" src="../../assets/me.jpeg" width="100px" height="120px"></div>
      </div>
    </section>
  `,
  styles: [
  ]
})
export class NameAndPicture implements OnInit {

    faLocationArrow = faLocationArrow;


  constructor() { }

  ngOnInit(): void {
  }
}
