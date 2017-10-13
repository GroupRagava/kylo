/**
 * Created by development on 23/8/17.
 */
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { MdIconModule, MdCardModule, MdButtonModule, MdListModule, MdProgressBarModule, MdMenuModule, MdToolbarModule, MdSidenavModule, MdInputModule, MdCheckboxModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { DisplayDocumentsComponent } from './display-documents.component';
import { DisplayDocumentsRouting } from './display-documents.routing';
import { ModeListComponent } from './mode-list/mode-list.component';
import { ModeCardComponent } from './mode-card/mode-card.component';
import { DisplayDocumentsService } from './display-documents.service';
import { OrderModule } from 'ngx-order-pipe';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DisplayDocumentsRouting),
    PerfectScrollbarModule.forChild(),
    MdIconModule,
    MdCardModule,
    MdButtonModule,
    MdListModule,
    MdToolbarModule,
    MdProgressBarModule,
    MdMenuModule,
    MdInputModule,
    MdCheckboxModule,
    NgxDatatableModule,
    FlexLayoutModule,
    FlexLayoutModule,
    MdSidenavModule,
    FormsModule,
    OrderModule
  ],
  declarations: [ DisplayDocumentsComponent, ModeListComponent, ModeCardComponent
  ],
  exports: [ DisplayDocumentsComponent, ModeListComponent, ModeCardComponent],
  providers: [DisplayDocumentsService]

})

export class DisplayDocumentsModule {}
