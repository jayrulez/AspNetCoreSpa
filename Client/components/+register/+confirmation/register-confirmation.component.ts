import { Component, OnInit } from '@angular/core';
import { Router, RouteParams } from '@angular/router-deprecated';

import { PageHeading } from '../../shared';

@Component({
    selector: 'sd-register-confirmation',
    directives: [PageHeading],
    template: require('./register-confirmation.component.html')
})
export class RegisterConfirmationComponent implements OnInit {
    emailConfirmed: boolean;

    constructor(private router: Router, private routeParams: RouteParams) { }

    ngOnInit() {
        this.emailConfirmed = (this.routeParams.get('emailConfirmed') && this.routeParams.get('emailConfirmed').toLowerCase() === 'true');
    }
}
