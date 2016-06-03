﻿import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router-deprecated';

import { RegisterModel } from './register.model';
import { RegisterService } from './register.service';
import { ControlBase, ControlTextbox, DynamicFormComponent, ErrorSummaryComponent } from '../../shared';

@Component({
    selector: 'sd-register',
    template: require('./register.component.html'),
    directives: [DynamicFormComponent, ErrorSummaryComponent],
    providers: [RegisterService]
})
export class RegisterComponent implements OnInit {
    registerModel: RegisterModel;
    private errors: string[];
    private controls: ControlBase<any>[];

    constructor(public registerService: RegisterService, public router: Router) {
        this.registerModel = new RegisterModel('', '', '');
    }

    register(model: any): void {
        this.registerModel.username = model.username;
        this.registerModel.email = model.email;
        this.registerModel.password = model.password;
        this.registerService.register(this.registerModel)
            .subscribe((res: Response) => {
                this.router.navigate(['RegisterConfirmation']);
            },
            (errors: string[]) => {
                this.errors = errors;
            });
    };

    ngOnInit() {
        let controls: ControlBase<any>[] = [
            new ControlTextbox({
                key: 'username',
                label: 'Username',
                placeholder: 'Username',
                value: '',
                type: 'text',
                required: true,
                order: 1
            }),
            new ControlTextbox({
                key: 'email',
                label: 'Email',
                placeholder: 'Email',
                value: '',
                type: 'email',
                required: true,
                order: 2
            }),
            new ControlTextbox({
                key: 'password',
                label: 'Password',
                placeholder: 'Password',
                value: '',
                type: 'password',
                required: true,
                order: 3
            }),
        ];

        this.controls = controls;
    }

}
