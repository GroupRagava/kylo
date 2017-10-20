/**
 * Created by development on 4/7/17.
 */
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
   MdSelectModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FilterComponent } from './filter.component';

@NgModule({
  imports: [
    CommonModule,
    MdSelectionModule,
    FlexLayoutModule,

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
  declarations: [ FilterComponent ],
  exports: [FilterComponent]
})

export class FilterModule {}
