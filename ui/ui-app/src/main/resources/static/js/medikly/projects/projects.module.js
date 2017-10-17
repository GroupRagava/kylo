var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core", "@angular/router", "@angular/common", "@angular/material", "@angular/flex-layout", "ngx-perfect-scrollbar", "./home/projects.component", "./workflow/workflow.component", "./main/main.component", "../shared/listing/shared-listing.module", "ngx-order-pipe", "ng2-dragula/ng2-dragula", "../shared/dialog/dialog.module", "../shared/display-documents/display-documents.module", "@covalent/core", "@covalent/core", "@angular/forms", "./dialog/new-project/dialog.new-project", "@uirouter/angular"], function (require, exports, core_1, router_1, common_1, material_1, flex_layout_1, ngx_perfect_scrollbar_1, projects_component_1, workflow_component_1, main_component_1, shared_listing_module_1, ngx_order_pipe_1, ng2_dragula_1, dialog_module_1, display_documents_module_1, core_2, core_3, forms_1, dialog_new_project_1, angular_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HOME_STATES = {
        name: 'projects',
        url: '/projects',
        views: {
            "content": {
                component: main_component_1.MainComponent,
            }
        }
    };
    var projectsState = { name: 'projects', url: '/projects', views: {
            "content": {
                component: main_component_1.MainComponent,
            }
        }
    };
    var homeState = { name: 'projects.home', url: '/home', views: {
            "content": {
                component: projects_component_1.ProjectsComponent,
            }
        }
    };
    var ProjectsModule = (function () {
        function ProjectsModule() {
        }
        return ProjectsModule;
    }());
    ProjectsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                ngx_perfect_scrollbar_1.PerfectScrollbarModule.forChild(),
                /*        UIRouterModule.forRoot({states: [HOME_STATES]}),*/
                angular_1.UIRouterModule.forChild({ states: [projectsState, homeState] }),
                material_1.MdIconModule,
                material_1.MdCardModule,
                material_1.MdButtonModule,
                material_1.MdListModule,
                material_1.MdToolbarModule,
                material_1.MdProgressBarModule,
                material_1.MdMenuModule,
                material_1.MdTabsModule,
                material_1.MdInputModule,
                material_1.MdRadioModule,
                material_1.MdCheckboxModule,
                material_1.MdDialogModule,
                flex_layout_1.FlexLayoutModule,
                shared_listing_module_1.SharedListingModule,
                flex_layout_1.FlexLayoutModule,
                material_1.MdSidenavModule,
                forms_1.FormsModule,
                ngx_order_pipe_1.OrderModule,
                ng2_dragula_1.DragulaModule,
                dialog_module_1.DialogModule,
                display_documents_module_1.DisplayDocumentsModule,
                core_2.CovalentExpansionPanelModule,
                core_3.CovalentStepsModule,
                forms_1.ReactiveFormsModule
            ],
            declarations: [projects_component_1.ProjectsComponent, main_component_1.MainComponent, workflow_component_1.WorkflowComponent, dialog_new_project_1.DialogNewProject
            ],
            entryComponents: [dialog_new_project_1.DialogNewProject],
        })
    ], ProjectsModule);
    exports.ProjectsModule = ProjectsModule;
});
//# sourceMappingURL=projects.module.js.map