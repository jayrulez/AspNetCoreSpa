import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/common';

import { UserProfileService } from './user-profile.service';
import { ChangePasswordModel } from './change-password.model';
import { ValidationService, PageHeading } from '../shared';

@Component({
    selector: 'sd-change-password',
    directives: [PageHeading],
    template: require('./change-password.component.html')
})
export class ChangePasswordComponent {
    changePasswordForm: any;
    changePasswordModel: ChangePasswordModel = new ChangePasswordModel('', '', '');
    @Output() notification = new EventEmitter<string>();

    constructor(public userProfileService: UserProfileService, private fb: FormBuilder) {
        this.changePasswordForm = this.fb.group({
            'oldPassword': ['', Validators.compose([Validators.required, ValidationService.passwordValidator])],
            'newPassword': ['', Validators.compose([Validators.required, ValidationService.passwordValidator])],
            'confirmPassword': ['', Validators.compose([Validators.required, ValidationService.passwordValidator])]
        });
    }

    changePassword(form: any): void {
        if (this.changePasswordForm.valid && this.changePasswordForm.dirty) {
            this.changePasswordModel.oldPassword = this.changePasswordForm.value.oldPassword;
            this.changePasswordModel.newPassword = this.changePasswordForm.value.newPassword;
            this.changePasswordModel.confirmPassword = this.changePasswordForm.value.confirmPassword;
            this.userProfileService.changePassword(this.changePasswordModel)
                .subscribe((res: any) => {
                    this.notification.emit(`Password changed successfully`);
                },
                (errors: any) => {
                    this.notification.emit(errors[0]);
                    this.changePasswordModel = new ChangePasswordModel('', '', '');
                });

        }
    }
}
