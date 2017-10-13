import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  MdInputModule,
  MdGridListModule,
  MdCheckboxModule,
  MdSidenavModule, MdSelectionModule, MdRadioModule,
  //MdExpansionModule,
  MdSelectModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SidebarComponent } from './sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    MdSelectionModule,
    FlexLayoutModule,
    //MdExpansionModule,
    MdCardModule,
    MdToolbarModule,
    MdTabsModule,
    MdIconModule,
    MdTooltipModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdListModule,
    MdSliderModule,
    MdInputModule,
    MdGridListModule,
    MdCheckboxModule,
    MdSidenavModule,
    MdSelectModule,
    MdRadioModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ SidebarComponent ],
  exports: [SidebarComponent]
})

export class SidebarModule {}
