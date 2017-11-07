var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core", "@angular/common", "@covalent/core", "@angular/material", "@angular/forms", "@angular/flex-layout", "./profile.component", "ngx-perfect-scrollbar", "@qontu/ngx-inline-editor", "./main-activity/main-activity.component", "../shared/profile/shared-profile.module", "@uirouter/angular"], function (require, exports, core_1, common_1, core_2, material_1, forms_1, flex_layout_1, profile_component_1, ngx_perfect_scrollbar_1, ngx_inline_editor_1, main_activity_component_1, shared_profile_module_1, angular_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PROFILE_STATES = {
        name: 'profile',
        url: '/profile',
        views: {
            "content": {
                component: profile_component_1.ProfileComponent,
            }
        },
        data: {
            breadcrumbRoot: true,
            displayName: "Profile",
            module: 'profile',
            permissions: ['']
        }
    };
    var ProfileModule = (function () {
        function ProfileModule() {
        }
        ProfileModule.prototype.isOver = function () {
            return window.matchMedia("(max-width: 960px)").matches;
        };
        return ProfileModule;
    }());
    ProfileModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                angular_1.UIRouterModule.forChild({ states: [exports.PROFILE_STATES] }),
                ngx_perfect_scrollbar_1.PerfectScrollbarModule.forChild(),
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
                material_1.MdChipsModule,
                core_2.CovalentChipsModule,
                material_1.MdProgressBarModule,
                material_1.MdGridListModule,
                flex_layout_1.FlexLayoutModule,
                core_2.CovalentExpansionPanelModule,
                material_1.MdMenuModule,
                material_1.MdInputModule,
                forms_1.FormsModule,
                ngx_inline_editor_1.InlineEditorModule,
                forms_1.ReactiveFormsModule,
                shared_profile_module_1.SharedProfileModule
            ],
            declarations: [profile_component_1.ProfileComponent, main_activity_component_1.MainActivityComponent
            ],
            exports: [main_activity_component_1.MainActivityComponent]
        })
    ], ProfileModule);
    exports.ProfileModule = ProfileModule;
});
//# sourceMappingURL=profile.module.js.map