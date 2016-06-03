import { Component } from '@angular/core';
import { RouteConfig } from '@angular/router-deprecated';

@Component({
    template: '<router-outlet></router-outlet>'
})
@RouteConfig([
    { path: '/', name: 'Register', loader: () => require('es6-promise!./+register')('RegisterComponent'), useAsDefault: true },
    { path: '/registerconfirmation', name: 'RegisterConfirmation', loader: () => require('es6-promise!./+confirmation')('RegisterConfirmationComponent') }
])
export class RegisterContainerComponent { }