import { Component, OnInit } from '@angular/core';

import { DataService } from '../../shared';

@Component({
    selector: 'sd-products',
    template: require('./products.component.html')
})
export class ProductsComponent implements OnInit {
    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.get('api/product')
            .subscribe(x => console.log(x));
    }
}
