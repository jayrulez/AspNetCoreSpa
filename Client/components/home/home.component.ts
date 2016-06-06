import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sd-home',
  styles: [require('./home.component.scss')],
  template: require('./home.component.html')
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    console.log('hello `Home` component');
  }

}
