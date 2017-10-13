import {NgModule} from '@angular/core';
import {DialogRenameFile} from './dialog-rename-file.component';
import {DialogRemoveFile} from './dialog-remove-file.component';
import {DialogLabel} from './dialog-label.component';
import {DialogFolder} from './dialog-folder.component';
import { DialogCreate } from './dialog-create.component';
import {MdButtonModule,
  MdDialogModule,
  MdInputModule,
  MdCardModule,
  MdIconModule,
  MdRadioModule,
  MdProgressBarModule,
  MdToolbarModule} from '@angular/material';
import { FormsModule,
  ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    MdButtonModule,
    MdDialogModule,
    MdInputModule,
    FormsModule,
    MdCardModule,
    MdIconModule,
    MdRadioModule,
    MdProgressBarModule,
    MdToolbarModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    FlexLayoutModule,
    CommonModule,
  ],
  declarations: [DialogFolder, DialogLabel, DialogRemoveFile, DialogRenameFile, DialogCreate],
  exports: [DialogFolder, DialogLabel, DialogRemoveFile, DialogRenameFile, DialogCreate],
  entryComponents: [
    DialogFolder, DialogLabel, DialogRenameFile, DialogRemoveFile, DialogCreate
  ],
})
export class DialogModule {
}
