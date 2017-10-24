var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core", "@angular/material", "@angular/flex-layout", "@angular/common", "ng2-file-upload/ng2-file-upload", "./upload-files/upload-files.dialog", "./add-files-url/add-files-url.dialog", "./add-description-file/add-description-file.dialog", "@angular/forms"], function (require, exports, core_1, material_1, flex_layout_1, common_1, ng2_file_upload_1, upload_files_dialog_1, add_files_url_dialog_1, add_description_file_dialog_1, forms_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DialogWorkspaceModule = (function () {
        function DialogWorkspaceModule() {
        }
        return DialogWorkspaceModule;
    }());
    DialogWorkspaceModule = __decorate([
        core_1.NgModule({
            imports: [
                material_1.MdButtonModule,
                material_1.MdDialogModule,
                material_1.MdInputModule,
                material_1.MdCardModule,
                material_1.MdTabsModule,
                material_1.MdChipsModule,
                material_1.MdIconModule,
                material_1.MdCheckboxModule,
                forms_1.FormsModule,
                material_1.MdToolbarModule,
                flex_layout_1.FlexLayoutModule,
                forms_1.ReactiveFormsModule,
                common_1.CommonModule,
                ng2_file_upload_1.FileUploadModule,
            ],
            declarations: [upload_files_dialog_1.DialogUploadFiles, add_files_url_dialog_1.DialogAddFilesUrl, add_description_file_dialog_1.DialogAddDescriptionFile],
            exports: [upload_files_dialog_1.DialogUploadFiles, add_files_url_dialog_1.DialogAddFilesUrl, add_description_file_dialog_1.DialogAddDescriptionFile],
            entryComponents: [upload_files_dialog_1.DialogUploadFiles, add_files_url_dialog_1.DialogAddFilesUrl, add_description_file_dialog_1.DialogAddDescriptionFile],
        })
    ], DialogWorkspaceModule);
    exports.DialogWorkspaceModule = DialogWorkspaceModule;
});
//# sourceMappingURL=dialog-workspace.module.js.map