import { Component } from '@angular/core';
import { RouteConfig } from '@angular/router-deprecated';

import { DataService } from '../shared';

@Component({
    selector: 'sd-admin',
    template: require('./admin.component.html')
})
export class AdminComponent {
    message: any;

    constructor(private dataService: DataService) { }

    doAdminOperation() {
        this.dataService.get('api/admin/doadminoperation')
            .subscribe(data => this.message = data);
    }
}
