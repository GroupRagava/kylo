var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core", "@angular/common", "./main/main.component", "./project-summary/project-summary.component", "./data-dictionary/data-dictionary.component", "./home/home.component", "./dialog/dialog-workspace.module", "@uirouter/angular", "@angular/material", "@angular/flex-layout", "ngx-perfect-scrollbar", "ng2-file-upload/ng2-file-upload"], function (require, exports, core_1, common_1, main_component_1, project_summary_component_1, data_dictionary_component_1, home_component_1, dialog_workspace_module_1, angular_1, material_1, flex_layout_1, ngx_perfect_scrollbar_1, ng2_file_upload_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var workspaceState = { name: 'workspace', url: '/projects/view/:id/workspace', views: {
            "content": {
                component: main_component_1.MainComponent,
            }
        }
    };
    var homeState = { name: 'workspace.home', url: '/home', views: {
            "child-content": {
                component: home_component_1.HomeComponent,
            }
        }
    };
    var summaryState = { name: 'workspace.summary', url: '/project-summary', views: {
            "child-content": {
                component: project_summary_component_1.ProjectSummaryComponent,
            }
        }
    };
    var dictionaryState = { name: 'workspace.dictionary', url: '/data-dictionary', views: {
            "child-content": {
                component: data_dictionary_component_1.DataDictionaryComponent,
            }
        }
    };
    var ProjectWorkspaceModule = (function () {
        function ProjectWorkspaceModule() {
        }
        return ProjectWorkspaceModule;
    }());
    ProjectWorkspaceModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                angular_1.UIRouterModule.forChild({ states: [workspaceState, homeState, summaryState, dictionaryState] }),
                material_1.MdCardModule,
                material_1.MdToolbarModule,
                material_1.MdTabsModule,
                material_1.MdIconModule,
                material_1.MdTooltipModule,
                material_1.MdButtonModule,
                material_1.MdButtonToggleModule,
                material_1.MdChipsModule,
                material_1.MdListModule,
                material_1.MdSliderModule,
                material_1.MdCheckboxModule,
                material_1.MdMenuModule,
                material_1.MdSidenavModule,
                /*    MdExpansionModule,*/
                material_1.MdSelectionModule,
                material_1.MdRadioModule,
                material_1.MdSelectModule,
                material_1.MdProgressBarModule,
                material_1.MdGridListModule,
                flex_layout_1.FlexLayoutModule,
                ngx_perfect_scrollbar_1.PerfectScrollbarModule.forChild(),
                dialog_workspace_module_1.DialogWorkspaceModule,
                ng2_file_upload_1.FileUploadModule
            ],
            declarations: [main_component_1.MainComponent, project_summary_component_1.ProjectSummaryComponent, home_component_1.HomeComponent, data_dictionary_component_1.DataDictionaryComponent]
        })
    ], ProjectWorkspaceModule);
    exports.ProjectWorkspaceModule = ProjectWorkspaceModule;
});
//# sourceMappingURL=project-workspace.module.js.map