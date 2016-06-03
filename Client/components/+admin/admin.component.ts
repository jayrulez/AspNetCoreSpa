import { Component } from '@angular/core';
import { RouteConfig } from '@angular/router-deprecated';

import { AdminHome } from './admin-home.component';
import { ProductsComponent } from './+products';
import { CategoriesComponent } from './+categories';

@Component({
    selector: 'sd-admin',
    template: `
            <a [routerLink]="['Admin']">
                Home
            </a>|
            <a [routerLink]="['Categories']">
                Categories
            </a>|
            <a [routerLink]="['Products']">
                Products
            </a>
                <router-outlet></router-outlet>
              `
})
@RouteConfig([
    { path: '/', name: 'AdminHome', component: AdminHome, useAsDefault: true },
    { path: '/categories', name: 'Categories', component: CategoriesComponent },
    { path: '/products', name: 'Products', component: ProductsComponent },
])
export class AdminComponent { }
