import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sc-about-you',
    styles: [require('./about-you.component.scss')],
    template: require('./about-you.component.html')
})
export class AboutYouComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        console.log('About you component loaded');
    }
}
