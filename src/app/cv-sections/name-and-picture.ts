import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-and-picture',
  template: `
    <section>
      <div class="row">
        <div class="col-md-9">
            <p class="p-font">MOHAMMED JAMAL</p>
            <p class="p-font">Developer</p>
        </div>
        <div class="col-md-3"> <img class="img-circle" alt="mohammed" src="../../assets/me.jpeg" width="100px" height="120px"></div>
      </div>
    </section>
  `,
  styles: [
  ]
})
export class NameAndPicture implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
