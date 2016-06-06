import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { AuthService } from '../services';

@Component({
    selector: 'sd-header',
    styles: [require('./header.component.scss')],
    template: require('./header.component.html')
})
export class HeaderComponent {
    constructor(private router: Router, private authService: AuthService) { }
}
