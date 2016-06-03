import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouteConfig } from '@angular/router-deprecated';

import { PageHeading } from '../shared';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

@Component({
  selector: 'sc-about',
  styles: [require('./about.component.scss')],
  directives: [PageHeading],
  template: `
  <page-heading text='About page'></page-heading>
  <p>With nested Angular 2 routing</p>
    <div class="nav">
        <a [routerLink]="['AboutMe']">About me</a>
        <a [routerLink]="['AboutYou']">About you</a>
    </div>    
    <router-outlet></router-outlet>
  `
})
@RouteConfig([
  { path: '/me', name: 'AboutMe', loader: () => require('es6-promise!./+me')('AboutMeComponent'), useAsDefault: true },
  { path: '/you', name: 'AboutYou', loader: () => require('es6-promise!./+you')('AboutYouComponent') }
])
export class AboutComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    console.log('About component is lazily loaded');
  }
}
