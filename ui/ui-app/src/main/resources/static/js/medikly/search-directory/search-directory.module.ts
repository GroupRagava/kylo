import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {environment} from '../environments/environment';
import {CovalentExpansionPanelModule} from '@covalent/core';
//import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {SharedProfileModule} from '../shared/profile/shared-profile.module';
import {AppCardTopActionsDirective} from '../directives/avatar-card';
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
    /*MdExpansionModule,*/
    MdSidenavModule, MdSelectionModule, MdRadioModule, MdSelectModule,
    MdProgressBarModule,
    MdGridListModule,
    MdMenuModule
} from '@angular/material';

import {NgCircleProgressModule} from 'ng-circle-progress';

import {AgmCoreModule} from '@agm/core';
import {CovalentSearchModule} from '@covalent/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SearchDirectoryComponent} from './search-directory.component';
import {DirectoryListingComponent} from './listing/directory-listing.component';
import {DirectoryProfileComponent} from './profile/directory-profile.component';
/*import { SidebarComponent } from '../layouts/sidebar/sidebar.component';
 import { FilterComponent } from '../layouts/filter/filter.component';*/
import {SearchDirectoryRouting} from './search-directory.routing';
import {
    AboutComponent,
    EducationTrainingComponent,
    CommonConditionsComponent,
    ContactComponent,
    MoreDoctorsComponent,
    MoreMediklyComponent,
    OpenPaymentsComponent,
    PhysicianTeamingComponent,
    PrescribingRecordComponent,
    ProfessionalInformationComponent,
    ReferencesComponent
} from './profile/expansion/index';
import {UIRouterModule, Ng2StateDeclaration} from "@uirouter/angular";


let directoryState = { name: 'directory', url: '/directory',    views: {
    "content": {
        component: SearchDirectoryComponent,
    }}
};

@NgModule({
    imports: [
        CommonModule,
        UIRouterModule.forChild({ states: [directoryState]}),
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
/*        MdExpansionModule,*/
        MdSelectionModule,
        MdRadioModule,
        MdSelectModule,
        MdProgressBarModule,
        MdGridListModule,
        FlexLayoutModule,
        CovalentExpansionPanelModule,
        MdMenuModule,
        CovalentSearchModule,
        SharedProfileModule,
/*        NgCircleProgressModule.forRoot({
            // set defaults here
            radius: 40,
            outerStrokeWidth: 16,
            innerStrokeWidth: 8,
            outerStrokeColor: '#78C000',
            innerStrokeColor: '#C7E596',
            showSubtitle: false,
            animationDuration: 300,
        }),*/
        AgmCoreModule.forRoot({apiKey: environment.googleMapApiKey})
    ],
    declarations: [SearchDirectoryComponent,
        DirectoryListingComponent,
        DirectoryProfileComponent,
        EducationTrainingComponent,
        CommonConditionsComponent,
        AboutComponent,
        ContactComponent,
        MoreDoctorsComponent,
        MoreMediklyComponent,
        OpenPaymentsComponent,
        PhysicianTeamingComponent,
        PrescribingRecordComponent,
        ProfessionalInformationComponent,
        ReferencesComponent,
        AppCardTopActionsDirective,
    ]
})

export class SearchDirectoryModule {
}
