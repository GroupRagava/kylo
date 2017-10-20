import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    CardLayoutComponent, MdkCardLayoutContentDirective,
    MdkCardLayoutLeftSidebarDirective, MdkCardLayoutRightSidebarDirective
} from './card-layout.component';
import {MdToolbarModule, MdIconModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';

@NgModule({
    imports: [
        CommonModule,
        MdToolbarModule,
        FlexLayoutModule,
        MdIconModule,
        PerfectScrollbarModule
    ],
    declarations: [CardLayoutComponent, MdkCardLayoutContentDirective, MdkCardLayoutLeftSidebarDirective, MdkCardLayoutRightSidebarDirective],
    exports: [CardLayoutComponent, MdkCardLayoutContentDirective, MdkCardLayoutLeftSidebarDirective, MdkCardLayoutRightSidebarDirective]
})
export class CardLayoutModule {
}
