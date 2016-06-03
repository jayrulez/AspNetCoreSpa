import { Injectable }       from '@angular/core';

import { ControlBase }     from './control-base';
import { ControlTextbox }  from './control-textbox';
import { ControlDropdown } from './control-dropdown';

@Injectable()
export class FormControlServiceExample {
    getQuestions() {

        let questions: ControlBase<any>[] = [

            new ControlDropdown({
                key: 'brave',
                label: 'Bravery Rating',
                options: [
                    { key: 'solid', value: 'Solid' },
                    { key: 'great', value: 'Great' },
                    { key: 'good', value: 'Good' },
                    { key: 'unproven', value: 'Unproven' }
                ],
                order: 3
            }),

            new ControlTextbox({
                key: 'firstName',
                label: 'First name',
                value: 'Bombasto',
                required: true,
                order: 1
            }),

            new ControlTextbox({
                key: 'emailAddress',
                label: 'Email',
                type: 'email',
                required: true,
                order: 2
            })
        ];

        return questions.sort((a, b) => a.order - b.order);
    }
}
