/**
 * Created by development on 21/7/17.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CovalentExpansionPanelModule, CovalentChipsModule} from '@covalent/core';
import {
    MdCardModule,
    MdToolbarModule,
    MdTabsModule,
    MdIconModule,
    MdTooltipModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdListModule,
    MdSliderModule,
    MdCheckboxModule,
    MdSidenavModule, MdSelectionModule, MdRadioModule, MdSelectModule,
    MdProgressBarModule,
    MdGridListModule,
    MdMenuModule,
    MdInputModule,
    MdChipsModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ProfileComponent} from './profile.component';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {InlineEditorModule} from '@qontu/ngx-inline-editor';
import {MainActivityComponent} from './main-activity/main-activity.component';
import { SharedProfileModule } from '../shared/profile/shared-profile.module';

import {UIRouterModule, Ng2StateDeclaration} from "@uirouter/angular";
export let PROFILE_STATES: Ng2StateDeclaration = {
    name: 'profile',
    url: '/profile',
    views: {
        "content": {
            component: ProfileComponent,
        }
    },
    data: {
        breadcrumbRoot: true,
        displayName: "Profile",
        module: 'profile',
        permissions: ['']
    }
};

@NgModule({
    imports: [
        CommonModule,
        UIRouterModule.forChild({states: [PROFILE_STATES]}),
        PerfectScrollbarModule.forChild(),
        MdCardModule,
        MdToolbarModule,
        MdTabsModule,
        MdIconModule,
        MdTooltipModule,
        MdButtonModule,
        MdButtonToggleModule,
        MdListModule,
        MdSliderModule,
        MdCheckboxModule,
        MdSidenavModule,
        MdSelectionModule,
        MdRadioModule,
        MdSelectModule,
        MdChipsModule,
        CovalentChipsModule,
        MdProgressBarModule,
        MdGridListModule,
        FlexLayoutModule,
        CovalentExpansionPanelModule,
        MdMenuModule,
        MdInputModule,
        FormsModule,
        InlineEditorModule,
        ReactiveFormsModule,
        SharedProfileModule
    ],
    declarations: [ProfileComponent, MainActivityComponent
    ],
    exports:[MainActivityComponent]

})

export class ProfileModule {


    isOver(): boolean {
        return window.matchMedia(`(max-width: 960px)`).matches;
    }
}
