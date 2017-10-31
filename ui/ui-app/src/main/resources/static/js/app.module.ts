import {NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {UpgradeModule} from "@angular/upgrade/static";
import {UIRouterModule} from "@uirouter/angular";
import {UIRouterUpgradeModule} from "@uirouter/angular-hybrid";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import {MdDialogModule} from '@angular/material';

import "routes";

@NgModule({
    imports: [
        BrowserModule,
        UIRouterModule,
        UIRouterUpgradeModule,
        UpgradeModule,
        BrowserAnimationsModule,
        MdDialogModule,
        HttpModule
    ],
    providers: [
        {provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader}
    ]
})
export class KyloModule {
    ngDoBootstrap() {
    }
}
