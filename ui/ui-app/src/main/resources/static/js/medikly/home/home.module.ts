import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    MdIconModule,
    MdCardModule,
    MdButtonModule,
    MdListModule,
    MdProgressBarModule,
    MdMenuModule,
    MdToolbarModule
} from '@angular/material';

import {HomeComponent} from './home.component';
import {UIRouterModule, Ng2StateDeclaration} from "@uirouter/angular";


import { FlexLayoutModule} from "@angular/flex-layout";

export let HOME_STATES: Ng2StateDeclaration = {
    name: 'homepage',
    url: '/homepage',
    views: {
        "content": {
            component: HomeComponent,
        }
    },
    data: {
        breadcrumbRoot: false,
        displayName: "Homepage",
        module: 'homepage',
        permissions: ['']
    }
};


@NgModule({
    imports: [
        CommonModule,
        UIRouterModule.forChild({states: [HOME_STATES]}),
        MdIconModule,
        MdCardModule,
        MdButtonModule,
        MdListModule,
        MdToolbarModule,
        MdProgressBarModule,
        MdMenuModule,
        FlexLayoutModule
    ],
    declarations: [HomeComponent]
})

export class HomeModule {
}