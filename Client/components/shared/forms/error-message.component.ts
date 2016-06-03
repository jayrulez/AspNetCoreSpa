import { Component, Host, Input } from '@angular/core';
import { NgFormModel } from '@angular/common';

import { ValidationService } from './validation.service';

@Component({
    selector: 'control-error-message',
    template: `<label *ngIf="errorMessage" class="error"> {{errorMessage}} </label>`
})
export class ErrorMessageComponent {
    @Input() control: any;
    constructor( @Host() private _formDir: NgFormModel) { }

    get errorMessage() {
        let c = this._formDir.form.find(this.control);

        for (let propertyName in c.errors) {
            if (c.errors.hasOwnProperty(propertyName) && c.touched) {
                return ValidationService.getValidatorErrorMessage(propertyName);
            }
        }
        return undefined;
    }
}
