import { Component, Input } from '@angular/core';

@Component({
    selector: 'sd-error-summary',
    template: require('./error-summary.component.html')
})
export class ErrorSummaryComponent {
    @Input() errors: string | string[];

    constructor() { }
}
