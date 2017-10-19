var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core", "@angular/common", "@angular/material", "@angular/flex-layout", "@angular/forms", "../shared/charts/charts.module", "ngx-perfect-scrollbar", "../shared/listing/shared-listing.module", "ngx-order-pipe", "ng2-dragula/ng2-dragula", "../shared/dialog/dialog.module", "../shared/display-documents/display-documents.module", "@covalent/core", "./main/project-view.component", "./main/info-panel/info-panel.component", "./home/home.component", "./target/target.component", "../shared/profile/shared-profile.module", "./target/target-tabs/target-tabs.component", "./assets/assets.component", "./segments/segments.component", "./reports/reports.component", "./target/expansion-chart/expansion-chart.component", "../services/http.service", "../shared/card-layout/card-layout.module", "./main/info-top/info-top.component", "@uirouter/angular"], function (require, exports, core_1, common_1, material_1, flex_layout_1, forms_1, charts_module_1, ngx_perfect_scrollbar_1, shared_listing_module_1, ngx_order_pipe_1, ng2_dragula_1, dialog_module_1, display_documents_module_1, core_2, project_view_component_1, info_panel_component_1, home_component_1, target_component_1, shared_profile_module_1, target_tabs_component_1, assets_component_1, segments_component_1, reports_component_1, expansion_chart_component_1, http_service_1, card_layout_module_1, info_top_component_1, angular_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //import {DialogWorkspaceModule} from '../project-workspace/dialog/dialog-workspace.module';
    var projectsViewState = { name: 'view', url: '/view/:id', views: {
            "content": {
                component: project_view_component_1.ProjectViewComponent,
            }
        }
    };
    var homeState = { name: 'view.home', url: '/home', views: {
            "child-content": {
                component: home_component_1.HomeComponent,
            }
        }
    };
    /*path: ':id',
        component: ProjectViewComponent,
        children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {
        path: 'home',
        component: HomeComponent
      },{
        path: 'target',
        component: TargetComponent
      },
      {
        path: 'measure/reports',
        component: ReportsComponent
      },
      {
        path: 'assets',
        component: AssetsComponent*/
    var ProjectViewModule = (function () {
        function ProjectViewModule() {
        }
        return ProjectViewModule;
    }());
    ProjectViewModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                angular_1.UIRouterModule.forChild({ states: [projectsViewState, homeState] }),
                ngx_perfect_scrollbar_1.PerfectScrollbarModule.forChild(),
                material_1.MdIconModule,
                material_1.MdCardModule,
                material_1.MdButtonModule,
                material_1.MdTabsModule,
                material_1.MdListModule,
                material_1.MdToolbarModule,
                material_1.MdProgressBarModule,
                material_1.MdMenuModule,
                material_1.MdInputModule,
                material_1.MdTooltipModule,
                material_1.MdCheckboxModule,
                material_1.MdSliderModule,
                material_1.MdSelectModule,
                charts_module_1.ChartsModule,
                //NgxDatatableModule,
                flex_layout_1.FlexLayoutModule,
                shared_listing_module_1.SharedListingModule,
                material_1.MdSidenavModule,
                forms_1.FormsModule,
                ngx_order_pipe_1.OrderModule,
                ng2_dragula_1.DragulaModule,
                dialog_module_1.DialogModule,
                display_documents_module_1.DisplayDocumentsModule,
                core_2.CovalentExpansionPanelModule,
                core_2.CovalentDataTableModule,
                core_2.CovalentSearchModule,
                core_2.CovalentPagingModule,
                //MdExpansionModule,
                core_2.CovalentStepsModule,
                shared_profile_module_1.SharedProfileModule,
                forms_1.ReactiveFormsModule,
                material_1.MdChipsModule,
                core_2.CovalentChipsModule,
                card_layout_module_1.CardLayoutModule,
            ],
            declarations: [
                project_view_component_1.ProjectViewComponent,
                home_component_1.HomeComponent,
                target_component_1.TargetComponent,
                target_tabs_component_1.TargetTabsComponent,
                segments_component_1.SegmentsComponent,
                reports_component_1.ReportsComponent,
                expansion_chart_component_1.ExpansionChartComponent,
                info_panel_component_1.InfoPanelComponent,
                info_top_component_1.InfoTopComponent,
                assets_component_1.AssetsComponent
            ],
            providers: [
                http_service_1.HttpService
            ]
        })
    ], ProjectViewModule);
    exports.ProjectViewModule = ProjectViewModule;
});
//# sourceMappingURL=project-view.module.js.map