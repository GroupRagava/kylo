var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core", "@angular/router", "@angular/common", "@angular/material", "@angular/flex-layout", "@angular/forms", "@swimlane/ngx-datatable", "ngx-perfect-scrollbar", "./display-documents.component", "./display-documents.routing", "./mode-list/mode-list.component", "./mode-card/mode-card.component", "./display-documents.service", "ngx-order-pipe"], function (require, exports, core_1, router_1, common_1, material_1, flex_layout_1, forms_1, ngx_datatable_1, ngx_perfect_scrollbar_1, display_documents_component_1, display_documents_routing_1, mode_list_component_1, mode_card_component_1, display_documents_service_1, ngx_order_pipe_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DisplayDocumentsModule = (function () {
        function DisplayDocumentsModule() {
        }
        return DisplayDocumentsModule;
    }());
    DisplayDocumentsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(display_documents_routing_1.DisplayDocumentsRouting),
                ngx_perfect_scrollbar_1.PerfectScrollbarModule.forChild(),
                material_1.MdIconModule,
                material_1.MdCardModule,
                material_1.MdButtonModule,
                material_1.MdListModule,
                material_1.MdToolbarModule,
                material_1.MdProgressBarModule,
                material_1.MdMenuModule,
                material_1.MdInputModule,
                material_1.MdCheckboxModule,
                ngx_datatable_1.NgxDatatableModule,
                flex_layout_1.FlexLayoutModule,
                flex_layout_1.FlexLayoutModule,
                material_1.MdSidenavModule,
                forms_1.FormsModule,
                ngx_order_pipe_1.OrderModule
            ],
            declarations: [display_documents_component_1.DisplayDocumentsComponent, mode_list_component_1.ModeListComponent, mode_card_component_1.ModeCardComponent
            ],
            exports: [display_documents_component_1.DisplayDocumentsComponent, mode_list_component_1.ModeListComponent, mode_card_component_1.ModeCardComponent],
            providers: [display_documents_service_1.DisplayDocumentsService]
        })
    ], DisplayDocumentsModule);
    exports.DisplayDocumentsModule = DisplayDocumentsModule;
});
//# sourceMappingURL=display-documents.module.js.map