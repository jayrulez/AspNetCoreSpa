import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sc-about-me',
    styles: [require('./about-me.component.scss')],
    template: require('./about-me.component.html')
})
export class AboutMeComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        console.log('About me component loaded');
    }
}
