var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
define(["require", "exports", "@angular/core", "../../core/toolbar/toolbar.service", "@angular/material", "@angular/platform-browser", "../dialog/new-project/dialog.new-project", "@angular/router"], function (require, exports, core_1, toolbar_service_1, material_1, platform_browser_1, dialog_new_project_1, router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ProjectsComponent = (function () {
        function ProjectsComponent(ts, dialog, document, el, router) {
            this.ts = ts;
            this.dialog = dialog;
            this.document = document;
            this.el = el;
            this.router = router;
            this.displayMode = 'default';
            this.multi = false;
            this.hideToggle = true;
            this.products = [];
            this.num = 1;
            this.order = 'name';
            this.reverse = false;
            //Card Mode and List Mode
            this.modeCard = true;
            this.titleMode = 'Recent Projects';
            this.showTemplates = false;
            this.hover = '';
            //SideMenu
            this.mainMenu = [{ icon: 'people', title: 'Shared with Me' }, {
                    icon: 'access_time',
                    title: 'Recent'
                }, { icon: 'star_rate', title: 'Starred' }, { icon: 'delete', title: 'Trash' }];
            this.infoMenu = [{ icon: 'settings', title: 'Settings' }, { icon: 'feedback', title: 'Send feedback' }, {
                    icon: 'help',
                    title: 'Help'
                }];
            this.dataMenu = [{ icon: 'subtitles', title: 'Data Model' }, { icon: 'settings_input_component', title: 'Data Sources' }];
            this.folderMenu = [{ icon: 'folder', title: 'Folder 1' }, { icon: 'folder', title: 'Folder 2' }];
            this.labelMenu = [{ icon: 'label', title: 'Label 1' }, { icon: 'label', title: 'Label 2' }];
            ts.setTopSectionTitle('Projects');
            ts.setToolbarColor('dark-blue');
            this.date = new Date();
        }
        ProjectsComponent.prototype.ngOnInit = function () {
        };
        ProjectsComponent.prototype.ngOnDestroy = function () {
            this.ts.restoreToolbarColor();
        };
        ProjectsComponent.prototype.isOver = function () {
            return window.matchMedia("(max-width: 960px)").matches;
        };
        ProjectsComponent.prototype.isMac = function () {
            var bool = false;
            if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
                bool = true;
            }
            return bool;
        };
        ProjectsComponent.prototype.openTemplates = function () {
            this.showTemplates = !this.showTemplates;
            if (this.showTemplates) {
                document.querySelector('.main-container').scrollTop = 0;
            }
        };
        //Open dialog new project
        ProjectsComponent.prototype.openDialogNewProject = function () {
            var _this = this;
            var dialogRef = this.dialog.open(dialog_new_project_1.DialogNewProject, {
                width: '848px',
            });
            dialogRef.afterClosed().subscribe(function (result) {
                if (result) {
                    console.log(result);
                    _this.router.navigate(['/projects/view/' + 0], { queryParams: { name: dialogRef.componentInstance.form.value.name, objective: dialogRef.componentInstance.form.value.objective, privacy: dialogRef.componentInstance.form.value.privacy } });
                }
            });
        };
        return ProjectsComponent;
    }());
    ProjectsComponent = __decorate([
        core_1.Component({
            selector: 'app-projects-home',
            templateUrl: 'projects.component.html',
            styleUrls: ['projects.component.scss']
        }),
        __param(2, core_1.Inject(platform_browser_1.DOCUMENT)),
        __metadata("design:paramtypes", [typeof (_a = typeof toolbar_service_1.ToolbarService !== "undefined" && toolbar_service_1.ToolbarService) === "function" && _a || Object, material_1.MdDialog, Document, core_1.ElementRef, router_1.Router])
    ], ProjectsComponent);
    exports.ProjectsComponent = ProjectsComponent;
    var _a;
});
//# sourceMappingURL=projects.component.js.map