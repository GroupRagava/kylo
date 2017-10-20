import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdListModule, MdGridListModule,
    MdMenuModule,
    MdSidenavModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

import { ToolbarTemplatesComponent } from './toolbar/toolbar-templates.component';
import { ModalTemplatesGalleryComponent } from './modal/modal-templates-gallery.component';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MdInputModule,
        MdButtonModule,
        MdButtonToggleModule,
        MdSidenavModule,
        MdCardModule,
        MdIconModule,
        MdMenuModule,
        MdListModule,
        MdToolbarModule,
        MdGridListModule
    ],
    declarations: [ToolbarTemplatesComponent, ModalTemplatesGalleryComponent],
    exports: [ToolbarTemplatesComponent, ModalTemplatesGalleryComponent]
})
export class SharedListingModule {
}
