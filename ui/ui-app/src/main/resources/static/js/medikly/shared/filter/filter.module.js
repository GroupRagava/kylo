var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core", "@angular/common", "@angular/material", "@angular/forms", "@angular/flex-layout", "./filter.component"], function (require, exports, core_1, common_1, material_1, forms_1, flex_layout_1, filter_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FilterModule = (function () {
        function FilterModule() {
        }
        return FilterModule;
    }());
    FilterModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                material_1.MdSelectionModule,
                flex_layout_1.FlexLayoutModule,
                material_1.MdCardModule,
                material_1.MdToolbarModule,
                material_1.MdTabsModule,
                material_1.MdIconModule,
                material_1.MdTooltipModule,
                material_1.MdButtonModule,
                material_1.MdButtonToggleModule,
                material_1.MdListModule,
                material_1.MdSliderModule,
                material_1.MdInputModule,
                material_1.MdGridListModule,
                material_1.MdCheckboxModule,
                material_1.MdSidenavModule,
                material_1.MdSelectModule,
                material_1.MdRadioModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ],
            declarations: [filter_component_1.FilterComponent],
            exports: [filter_component_1.FilterComponent]
        })
    ], FilterModule);
    exports.FilterModule = FilterModule;
});
//# sourceMappingURL=filter.module.js.map