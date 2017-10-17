import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {
    MdIconModule,
    MdCardModule,
    MdButtonModule,
    MdListModule,
    MdProgressBarModule,
    MdMenuModule,
    MdToolbarModule,
    MdSidenavModule,
    MdTabsModule,
    MdInputModule,
    MdCheckboxModule,

    MdDialogModule,
    MdRadioModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {ProjectsComponent} from './home/projects.component';
import {WorkflowComponent} from './workflow/workflow.component';
import {MainComponent} from './main/main.component';
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {SharedListingModule} from '../shared/listing/shared-listing.module';
import {OrderModule} from 'ngx-order-pipe';
import {DragulaModule} from 'ng2-dragula/ng2-dragula';
import {DialogModule} from '../shared/dialog/dialog.module';
import {DisplayDocumentsModule} from '../shared/display-documents/display-documents.module';
import {CovalentExpansionPanelModule} from '@covalent/core';
import {CovalentStepsModule} from '@covalent/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DialogNewProject} from './dialog/new-project/dialog.new-project';
import {UIRouterModule, Ng2StateDeclaration} from "@uirouter/angular";
import { APP_BASE_HREF } from '@angular/common';

export let HOME_STATES: Ng2StateDeclaration =
    {
        name: 'projects',
        url: '/projects',
        views: {
            "content": {
                component: MainComponent,
            }
        }
    },
    data: {
        breadcrumbRoot: false,
        displayName: "Projects",
        module: 'projects',
        permissions: ['']
    }
    ;


let projectsState = { name: 'projects', url: '/projects',    views: {
    "content": {
        component: MainComponent,
    }}
};
let homeState = { name: 'projects.home', url: '/home',    views: {
    "content": {
        component: ProjectsComponent,
    }}
};

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        PerfectScrollbarModule.forChild(),
/*        UIRouterModule.forRoot({states: [HOME_STATES]}),*/
        UIRouterModule.forChild({ states: [projectsState,homeState]}),
        MdIconModule,
        MdCardModule,
        MdButtonModule,
        MdListModule,
        MdToolbarModule,
        MdProgressBarModule,
        MdMenuModule,
        MdTabsModule,
        MdInputModule,
        MdRadioModule,
        MdCheckboxModule,
        MdDialogModule,
        FlexLayoutModule,
        SharedListingModule,
        FlexLayoutModule,
        MdSidenavModule,
        FormsModule,
        OrderModule,
        DragulaModule,
        DialogModule,
        DisplayDocumentsModule,
        CovalentExpansionPanelModule,

        CovalentStepsModule,
        ReactiveFormsModule
    ],
    declarations: [ProjectsComponent, MainComponent, WorkflowComponent, DialogNewProject
    ],
    entryComponents: [DialogNewProject],


})

export class ProjectsModule {
}