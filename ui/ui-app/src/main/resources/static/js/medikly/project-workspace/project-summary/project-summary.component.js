var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core"], function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //import * as Quill from 'quill';
    var ProjectSummaryComponent = (function () {
        function ProjectSummaryComponent() {
        }
        ProjectSummaryComponent.prototype.ngOnInit = function () {
            /*    const quill = new Quill('#editor-container', {
                  modules: {
                    toolbar: {
                      container: '#toolbar-toolbar'
                    }
                  },
                  placeholder: 'Compose an epic...',
                  theme: 'snow'
                });*/
        };
        return ProjectSummaryComponent;
    }());
    ProjectSummaryComponent = __decorate([
        core_1.Component({
            selector: 'app-project-summary',
            templateUrl: 'js/medikly/project-workspace/project-summary/project-summary.component.html',
            styleUrls: ['js/medikly/project-workspace/project-summary/project-summary.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], ProjectSummaryComponent);
    exports.ProjectSummaryComponent = ProjectSummaryComponent;
});
//# sourceMappingURL=project-summary.component.js.map