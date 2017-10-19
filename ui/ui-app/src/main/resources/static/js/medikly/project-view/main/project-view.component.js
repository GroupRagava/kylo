var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "@angular/router", "../../shared/data/documents"], function (require, exports, core_1, router_1, documents_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //import {SidenavService} from '../../core/sidenav/sidenav.service';
    var ProjectViewComponent = (function () {
        function ProjectViewComponent(route) {
            this.route = route;
            this.filters = [];
            this.documents = [];
            this.num = 1;
            this.documentId = this.route.snapshot.params['id'];
            if (this.documentId && this.documentId != 0) {
                this.getDocuments();
            }
            else {
                //this.ts.setTopSectionTitle('New file');
            }
            this.filters = [
                { title: 'Manage accounts and users', icon: '' },
                { title: 'Create an experiment', icon: '' },
                { title: 'Link to Google Analytics', icon: '' },
                { title: 'Install Optimize plugin', icon: '' },
                { title: 'Start an experiment', icon: '' }
            ];
        }
        ProjectViewComponent.prototype.ngOnInit = function () {
            //this.ts.setTopSectionTitle('');
            //this.ts.setToolbarColor('dark-blue');
            //this.ts.setSearchBarVisible(false);
            // this.ts.setBackRoute('');
        };
        ProjectViewComponent.prototype.ngOnDestroy = function () {
            //this.ts.restoreToolbarColor();
            // this.ts.setBackRoute('');
            //this.ts.setSearchBarVisible(true);
        };
        ProjectViewComponent.prototype.getDocuments = function () {
            var _this = this;
            this.fetchDocuments().then(function (documents) {
                _this.documents = documents;
                _this.documentSelected = _this.documents.find(function (x) { return x.id == _this.documentId; });
                //this.ts.setTopSectionTitle(this.documentSelected.file_name);
            });
        };
        ProjectViewComponent.prototype.fetchDocuments = function () {
            return Promise.resolve(documents_1.DOCUMENTS);
        };
        ProjectViewComponent.prototype.isOver = function () {
            return window.matchMedia("(max-width: 960px)").matches;
        };
        //Dropdown buttons
        ProjectViewComponent.prototype.toggleDropdown = function () {
            this.isOpen = !this.isOpen;
        };
        ProjectViewComponent.prototype.onClickOutside = function () {
            this.isOpen = false;
        };
        return ProjectViewComponent;
    }());
    ProjectViewComponent = __decorate([
        core_1.Component({
            selector: 'app-project-view',
            templateUrl: 'js/medikly/project-view/main/project-view.component.html',
            styleUrls: ['js/medikly/project-view/main/project-view.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], ProjectViewComponent);
    exports.ProjectViewComponent = ProjectViewComponent;
});
//# sourceMappingURL=project-view.component.js.map