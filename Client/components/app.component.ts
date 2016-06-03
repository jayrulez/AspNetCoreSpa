/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { RouteConfig, Router } from '@angular/router-deprecated';

import { AppService } from './app.service';
import { HomeComponent } from './home';
import { HeaderComponent, FooterComponent, RouterActive, DataService, ApiGateway, AuthService, HttpErrorHandler } from './shared';

/*
 * App Component
 * Top Level Component
 */

@Component({
  selector: 'sc-app',
  pipes: [],
  providers: [DataService, AuthService, ApiGateway, HttpErrorHandler],
  directives: [RouterActive, HeaderComponent, FooterComponent],
  styles: [require('./app.component.scss')],
  template: require('./app.component.html')
})
@RouteConfig([
  { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  { path: '/about/...', name: 'About', loader: () => require('es6-promise!./+about')('AboutComponent') },
  { path: '/admin/...', name: 'Admin', loader: () => require('es6-promise!./+admin')('AdminComponent') },
  { path: '/login', name: 'Login', loader: () => require('es6-promise!./+login')('LoginComponent') },
  { path: '/profile', name: 'Profile', loader: () => require('es6-promise!./+profile')('UserProfileComponent') },
  { path: '/register/...', name: 'RegisterContainer', loader: () => require('es6-promise!./+register')('RegisterContainerComponent') }
])
export class AppComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log('aaa');
    this.dataService.get('api/content?lang=en')
      .subscribe(x => console.log(x));
  }
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 */
