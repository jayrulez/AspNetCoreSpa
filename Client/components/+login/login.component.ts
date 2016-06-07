import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router-deprecated';
import { Response } from '@angular/http';

import { LoginModel } from './login.model';
import { LoginService } from './login.service';
import { DynamicFormComponent, ErrorSummaryComponent, ControlBase, ControlTextbox, ControlCheckbox, AuthService }      from '../shared';


@Component({
    selector: 'sd-login',
    template: require('./login.component.html'),
    providers: [LoginService],
    directives: [DynamicFormComponent, ErrorSummaryComponent]
})
export class LoginComponent implements OnInit {
    loginModel: LoginModel;
    errors: string[];
    controls: any;

    constructor(private loginService: LoginService, private router: Router, private authService: AuthService) {
        this.loginModel = new LoginModel('', '', false);
    }

    login(model: any): void {
        this.loginModel.email = model.email;
        this.loginModel.password = model.password;
        this.loginModel.rememberMe = model.rememberMe;
        this.loginService.login(this.loginModel)
            .subscribe((res: Response) => {
                this.authService.setAuth(res);
                this.router.navigate(['Home']);
            },
            (errors: string[]) => {
                this.errors = errors;
            });
    };

    ngOnInit() {
        let controls: ControlBase<any>[] = [
            new ControlTextbox({
                key: 'email',
                label: 'Email',
                placeholder: 'Email',
                value: '',
                type: 'email',
                required: true,
                order: 1
            }),
            new ControlTextbox({
                key: 'password',
                label: 'Password',
                placeholder: 'Password',
                value: '',
                type: 'password',
                required: true,
                order: 2
            }),
            new ControlCheckbox({
                key: 'rememberMe',
                label: 'Remember me?',
                value: false,
                class: 'rememberme',
                order: 3
            })
        ];

        this.controls = controls;
    }
}
