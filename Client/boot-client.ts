import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './style.css';

import './polyfills';
import './vendor';

import { bootstrap } from '@angular/platform-browser-dynamic';
import { FormBuilder } from '@angular/common';
import * as router from '@angular/router-deprecated';
import { Http, HTTP_PROVIDERS } from '@angular/http';

import { DIRECTIVES, PIPES, PROVIDERS } from './platform/browser';
import { ENV_PROVIDERS } from './platform/environment';

/*
* App Component
* our top level component that holds all of our components
*/
import { AppComponent, APP_PROVIDERS } from './components';


//bootstrap(AppComponent, [router.ROUTER_PROVIDERS, HTTP_PROVIDERS, FormBuilder]);
bootstrap(AppComponent, [
    ...PROVIDERS,
    ...ENV_PROVIDERS,
    ...DIRECTIVES,
    ...PIPES,
    ...APP_PROVIDERS
]).catch(err => console.error(err));

// Basic hot reloading support. Automatically reloads and restarts the Angular 2 app each time
// you modify source files. This will not preserve any application state other than the URL.
declare var module: any;

if (module.hot) {
    module.hot.accept();
}
