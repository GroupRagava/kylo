var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "@angular/router"], function (require, exports, core_1, router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var InfoTopComponent = (function () {
        function InfoTopComponent(route) {
            var _this = this;
            this.route = route;
            this.projectName = 'Project Name';
            // subscribe to router event
            this.params = this.route.queryParams.subscribe(function (params) {
                var name = params['name'];
                if (name)
                    _this.projectName = name;
            });
        }
        InfoTopComponent.prototype.ngOnInit = function () {
        };
        return InfoTopComponent;
    }());
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], InfoTopComponent.prototype, "documentId", void 0);
    __decorate([
        core_1.Input('projectName'),
        __metadata("design:type", Object)
    ], InfoTopComponent.prototype, "projectName", void 0);
    InfoTopComponent = __decorate([
        core_1.Component({
            selector: 'app-project-info-top',
            templateUrl: './info-top.component.html',
            styleUrls: ['./info-top.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], InfoTopComponent);
    exports.InfoTopComponent = InfoTopComponent;
});
//# sourceMappingURL=info-top.component.js.map