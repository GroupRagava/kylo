var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core", "@angular/common", "./card-layout.component", "@angular/material", "@angular/flex-layout", "ngx-perfect-scrollbar"], function (require, exports, core_1, common_1, card_layout_component_1, material_1, flex_layout_1, ngx_perfect_scrollbar_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CardLayoutModule = (function () {
        function CardLayoutModule() {
        }
        return CardLayoutModule;
    }());
    CardLayoutModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                material_1.MdToolbarModule,
                flex_layout_1.FlexLayoutModule,
                material_1.MdIconModule,
                ngx_perfect_scrollbar_1.PerfectScrollbarModule
            ],
            declarations: [card_layout_component_1.CardLayoutComponent, card_layout_component_1.MdkCardLayoutContentDirective, card_layout_component_1.MdkCardLayoutLeftSidebarDirective, card_layout_component_1.MdkCardLayoutRightSidebarDirective],
            exports: [card_layout_component_1.CardLayoutComponent, card_layout_component_1.MdkCardLayoutContentDirective, card_layout_component_1.MdkCardLayoutLeftSidebarDirective, card_layout_component_1.MdkCardLayoutRightSidebarDirective]
        })
    ], CardLayoutModule);
    exports.CardLayoutModule = CardLayoutModule;
});
//# sourceMappingURL=card-layout.module.js.map