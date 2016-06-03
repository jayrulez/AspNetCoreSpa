import { Component, Input, Output, EventEmitter }  from '@angular/core';
import { ControlGroup } from '@angular/common';

import { ControlBase, FormControlService } from './controls';
import { DynamicFormControlComponent } from './dynamic-form-control.component';

@Component({
    selector: 'dynamic-form',
    template: require('./dynamic-form.component.html'),
    directives: [DynamicFormControlComponent],
    providers: [FormControlService]
})
export class DynamicFormComponent {

    @Input() controls: ControlBase<any>[] = [];
    @Input() btnText: string = 'Submit'; // Default value at least
    @Input() formClass: string = 'form-horizontal';
    // Note: don't keep name of output events as same as native events such as submit etc.
    @Output() formsubmit: EventEmitter<any> = new EventEmitter<any>();
    form: ControlGroup;
    payLoad = '';

    constructor(private _controlService: FormControlService) { }

    ngOnInit() {
        let sortedControls = this.controls.sort((a, b) => a.order - b.order);
        this.form = this._controlService.toControlGroup(sortedControls);
    }

    onSubmit() {
        this.formsubmit.emit(this.form.value);
    }
}
