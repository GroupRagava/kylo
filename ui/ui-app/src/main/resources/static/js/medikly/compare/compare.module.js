var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core", "@angular/common", "@covalent/core", "ngx-perfect-scrollbar", "@angular/material", "@angular/flex-layout", "./compare.component", "@uirouter/angular"], function (require, exports, core_1, common_1, core_2, ngx_perfect_scrollbar_1, material_1, flex_layout_1, compare_component_1, angular_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.COMPARE_STATES = {
        name: 'compare',
        url: '/compare/:ids',
        views: {
            "content": {
                component: compare_component_1.CompareComponent,
            }
        },
        data: {
            breadcrumbRoot: true,
            displayName: "Compare",
            module: 'compare',
            permissions: ['']
        }
    };
    var CompareModule = (function () {
        function CompareModule() {
        }
        return CompareModule;
    }());
    CompareModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                ngx_perfect_scrollbar_1.PerfectScrollbarModule.forChild(),
                angular_1.UIRouterModule.forChild({ states: [exports.COMPARE_STATES] }),
                material_1.MdCardModule,
                material_1.MdToolbarModule,
                material_1.MdTabsModule,
                material_1.MdIconModule,
                material_1.MdTooltipModule,
                material_1.MdButtonModule,
                material_1.MdButtonToggleModule,
                material_1.MdListModule,
                material_1.MdSliderModule,
                material_1.MdCheckboxModule,
                material_1.MdSidenavModule,
                material_1.MdSelectionModule,
                material_1.MdRadioModule,
                material_1.MdSelectModule,
                material_1.MdProgressBarModule,
                material_1.MdGridListModule,
                flex_layout_1.FlexLayoutModule,
                core_2.CovalentExpansionPanelModule,
                material_1.MdMenuModule,
            ],
            declarations: [compare_component_1.CompareComponent,
            ]
        })
    ], CompareModule);
    exports.CompareModule = CompareModule;
});
//# sourceMappingURL=compare.module.js.map