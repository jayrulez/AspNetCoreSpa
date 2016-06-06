import { Injectable }   from '@angular/core';
import { FormBuilder, Validators } from '@angular/common';

import { ControlBase } from './';

@Injectable()
export class FormControlService {
    constructor(private _fb: FormBuilder) { }

    toControlGroup(controls: ControlBase<any>[]) {
        let group: any = {};

        controls.forEach(control => {
            group[control.key] = control.required ? [control.value || '', Validators.required] : [];
        });
        let fbGroup = this._fb.group(group);
        return fbGroup;
    }
}
