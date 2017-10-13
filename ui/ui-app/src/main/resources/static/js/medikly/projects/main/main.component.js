var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "../../core/toolbar/toolbar.service"], function (require, exports, core_1, toolbar_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MainComponent = (function () {
        function MainComponent(ts) {
            this.ts = ts;
            //SideMenu
            this.mainMenu = [
                { icon: 'inbox', title: 'My reports', items: [{ icon: 'folder', title: 'Folder 1' }, { icon: 'folder', title: 'Folder 2' }] },
                { icon: 'label', title: 'Labels', items: [{ icon: 'label', title: 'Label 1' }, { icon: 'label', title: 'Label 2' }] } /*,
                {icon: 'people', title: 'Shared with Me'},
                {icon: 'access_time', title: 'Recent'},
                {icon: 'star_rate', title: 'Starred'},
                {icon: 'delete', title: 'Archive'}*/
            ];
            ts.setTopSectionTitle('Projects');
            ts.setToolbarColor('dark-blue');
            ts.setSubMenuOptions(this.mainMenu);
        }
        MainComponent.prototype.ngOnInit = function () {
        };
        MainComponent.prototype.ngOnDestroy = function () {
            this.ts.restoreToolbarColor();
        };
        return MainComponent;
    }());
    MainComponent = __decorate([
        core_1.Component({
            selector: 'app-main',
            templateUrl: './main.component.html',
            styleUrls: ['./main.component.scss']
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof toolbar_service_1.ToolbarService !== "undefined" && toolbar_service_1.ToolbarService) === "function" && _a || Object])
    ], MainComponent);
    exports.MainComponent = MainComponent;
    var _a;
});
//# sourceMappingURL=main.component.js.map