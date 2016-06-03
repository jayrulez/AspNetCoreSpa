import { Component, Input } from '@angular/core';
import { ControlGroup }     from '@angular/common';
import { ControlBase }     from './controls';
import { ErrorMessageComponent }     from './error-message.component';

@Component({
    selector: 'df-control',
    template: require('./dynamic-form-control.component.html'),
    directives: [ErrorMessageComponent]
})
export class DynamicFormControlComponent {
    @Input() control: ControlBase<any>;
    @Input() form: ControlGroup;

    get isValid() {
        return this.form.controls[this.control.key].valid;
    }
}
