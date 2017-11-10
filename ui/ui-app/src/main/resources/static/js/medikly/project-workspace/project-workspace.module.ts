import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainComponent} from './main/main.component';
import { ProjectSummaryComponent } from './project-summary/project-summary.component';
import { DataDictionaryComponent } from './data-dictionary/data-dictionary.component';
import { HomeComponent } from './home/home.component';

import {ProjectWorkspaceRouting} from './project-workspace.routing';
import {DialogWorkspaceModule} from './dialog/dialog-workspace.module';
import {UIRouterModule, Ng2StateDeclaration} from "@uirouter/angular";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CovalentExpansionPanelModule } from '@covalent/core';
import {
  MdSidenavModule,
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
  MdMenuModule,
  MdInputModule,
  /*MdExpansionModule,*/
  MdSelectionModule,
  MdRadioModule,
  MdSelectModule,
  MdProgressBarModule,
  MdGridListModule,
  MdChipsModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { CovalentMarkdownModule } from '@covalent/markdown';
let workspaceState = { name: 'workspace', url: '/projects/view/:id/workspace',    views: {
  "content": {
    component: MainComponent,
  }},
  data: {
    breadcrumbRoot: true,
    displayName: "Project Name / Workspace",
    module: 'workspace',
    permissions: ['']
  }
};
let homeState = { name: 'workspace.home', url: '/home',    views: {
  "child-content": {
    component: HomeComponent,
  }}
};
let summaryState = { name: 'workspace.summary', url: '/project-summary',    views: {
  "child-content": {
    component: ProjectSummaryComponent,
  }}
};
let dictionaryState = { name: 'workspace.dictionary', url: '/data-dictionary',    views: {
  "child-content": {
    component: DataDictionaryComponent,
  }}
};

@NgModule({
  imports: [
    CommonModule,
    UIRouterModule.forChild({ states: [workspaceState, homeState,summaryState,dictionaryState]}),
    MdCardModule,
    MdToolbarModule,
    MdTabsModule,
    MdIconModule,
    MdTooltipModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdChipsModule,
    MdListModule,
    MdSliderModule,
    MdInputModule,
    MdCheckboxModule,
    MdMenuModule,
    MdSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    CovalentExpansionPanelModule,
    MdSelectionModule,
    CovalentMarkdownModule,
    MdRadioModule,
    MdSelectModule,
    MdProgressBarModule,
    MdGridListModule,
    FlexLayoutModule,
    PerfectScrollbarModule.forChild(),
    DialogWorkspaceModule,
    FileUploadModule
  ],
  declarations: [MainComponent, ProjectSummaryComponent, HomeComponent, DataDictionaryComponent]
})
export class ProjectWorkspaceModule {
}
