var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core", "@angular/common", "@covalent/core", "ngx-perfect-scrollbar", "../shared/profile/shared-profile.module", "../directives/avatar-card", "@angular/material", "@covalent/core", "@angular/flex-layout", "./search-directory.component", "./listing/directory-listing.component", "./profile/directory-profile.component", "./profile/expansion/index", "@uirouter/angular"], function (require, exports, core_1, common_1, core_2, ngx_perfect_scrollbar_1, shared_profile_module_1, avatar_card_1, material_1, core_3, flex_layout_1, search_directory_component_1, directory_listing_component_1, directory_profile_component_1, index_1, angular_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var directoryState = { name: 'directory', url: '/directory', views: {
            "content": {
                component: search_directory_component_1.SearchDirectoryComponent,
            }
        }
    };
    var SearchDirectoryModule = (function () {
        function SearchDirectoryModule() {
        }
        return SearchDirectoryModule;
    }());
    SearchDirectoryModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                angular_1.UIRouterModule.forChild({ states: [directoryState] }),
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
                /*        MdExpansionModule,*/
                material_1.MdSelectionModule,
                material_1.MdRadioModule,
                material_1.MdSelectModule,
                material_1.MdProgressBarModule,
                material_1.MdGridListModule,
                flex_layout_1.FlexLayoutModule,
                core_2.CovalentExpansionPanelModule,
                material_1.MdMenuModule,
                core_3.CovalentSearchModule,
                shared_profile_module_1.SharedProfileModule,
            ],
            declarations: [search_directory_component_1.SearchDirectoryComponent,
                directory_listing_component_1.DirectoryListingComponent,
                directory_profile_component_1.DirectoryProfileComponent,
                index_1.EducationTrainingComponent,
                index_1.CommonConditionsComponent,
                index_1.AboutComponent,
                index_1.ContactComponent,
                index_1.MoreDoctorsComponent,
                index_1.MoreMediklyComponent,
                index_1.OpenPaymentsComponent,
                index_1.PhysicianTeamingComponent,
                index_1.PrescribingRecordComponent,
                index_1.ProfessionalInformationComponent,
                index_1.ReferencesComponent,
                avatar_card_1.AppCardTopActionsDirective,
            ]
        })
    ], SearchDirectoryModule);
    exports.SearchDirectoryModule = SearchDirectoryModule;
});
//# sourceMappingURL=search-directory.module.js.map