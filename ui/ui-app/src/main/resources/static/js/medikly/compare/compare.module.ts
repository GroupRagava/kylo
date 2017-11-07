/**
 * Created by development on 27/7/17.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CovalentExpansionPanelModule} from '@covalent/core';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
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
  MdMenuModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CompareComponent} from './compare.component';
import {UIRouterModule, Ng2StateDeclaration} from "@uirouter/angular";

export let COMPARE_STATES: Ng2StateDeclaration = {
  name: 'compare',
  url: '/compare/:ids',
  views: {
    "content": {
      component: CompareComponent,
    }
  },
  data: {
    breadcrumbRoot: true,
    displayName: "Compare",
    module: 'compare',
    permissions: ['']
  }
};

@NgModule({
  imports: [
    CommonModule,
    PerfectScrollbarModule.forChild(),
    UIRouterModule.forChild({states: [COMPARE_STATES]}),
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
    MdProgressBarModule,
    MdGridListModule,
    FlexLayoutModule,
    CovalentExpansionPanelModule,
    MdMenuModule,
  ],
  declarations: [CompareComponent,
  ]
})

export class CompareModule {
}
