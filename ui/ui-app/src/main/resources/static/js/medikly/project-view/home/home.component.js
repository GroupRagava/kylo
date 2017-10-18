var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "@angular/router", "@angular/material"], function (require, exports, core_1, router_1, material_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //import {DialogUploadFiles} from '../../project-workspace/dialog/upload-files/upload-files.dialog';
    //import {DialogAddFilesUrl} from '../../project-workspace/dialog/add-files-url/add-files-url.dialog';
    var HomeComponent = (function () {
        function HomeComponent(route, dialog, router) {
            this.route = route;
            this.dialog = dialog;
            this.router = router;
            this.filters = [];
            this.num = 1;
            this.projectName = 'MDK Project';
            this.projectObjective = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";
            //Chips
            this.disabled = false;
            this.chipAddition = true;
            this.chipRemoval = true;
            this.strings = [
                'oncologist',
                'hospital',
                'medical training',
                'doctor',
                'general practitioner'
            ];
            this.stringsModel = this.strings.slice(0, 2);
            //Right Sidenav
            this.documents = [
                {
                    name: 'Project summary',
                    url: '/workspace/project-summary'
                },
                {
                    name: 'Data dictionary',
                    url: '/workspace/data-dictionary'
                }
            ];
            //Uploader
            this.files = [];
        }
        HomeComponent.prototype.ngOnInit = function () {
            //this.ts.setToolbarColor('dark-blue');
            //this.ts.setSearchBarVisible(false);
            //this.ts.setBackRoute('');
            var _this = this;
            this.project = 15;
            // subscribe to router event
            this.params = this.route.queryParams.subscribe(function (params) {
                var name = params['name'];
                if (name)
                    _this.projectName = name;
                var objective = params['objective'];
                if (objective)
                    _this.projectObjective = objective;
            });
        };
        HomeComponent.prototype.ngOnDestroy = function () {
            //this.ts.restoreToolbarColor();
            //this.ts.setBackRoute('');
            //this.ts.setSearchBarVisible(true);
        };
        HomeComponent.prototype.isOver = function () {
            return window.matchMedia("(max-width: 960px)").matches;
        };
        HomeComponent.prototype.filterStrings = function (value) {
            var _this = this;
            this.filteredStrings = this.strings.filter(function (item) {
                if (value) {
                    return item.toLowerCase().indexOf(value.toLowerCase()) > -1;
                }
                else {
                    return false;
                }
            }).filter(function (filteredItem) {
                return _this.stringsModel ? _this.stringsModel.indexOf(filteredItem) < 0 : true;
            });
        };
        //Open dialog upload files
        HomeComponent.prototype.openDialogUploadFiles = function () {
            /*   let dialogRef = this.dialog.open(DialogUploadFiles, {
                 width: '500px',
                 height: '100vh',
                 position: { right: '0px' }
               });
               dialogRef.afterClosed().subscribe(result => {
                 if (result) {
                   for (let file of dialogRef.componentInstance.uploader.queue) {
                     this.files.push(file);
                   }
           
                 }
               });*/
        };
        //Open dialog add files from URL
        HomeComponent.prototype.openDialogAddFilesUrl = function () {
            /*   let dialogRef = this.dialog.open(DialogAddFilesUrl, {
                 width: '500px',
                 height: '100vh',
                 position: { right: '0px' }
               });
           
               dialogRef.afterClosed().subscribe(result => {
                 if (result) {
                   this.files.push(dialogRef.componentInstance.files);
                 }
               });*/
        };
        HomeComponent.prototype.redirectToWorkspace = function () {
            var url = this.router.url;
            url = url.replace('/home', '/workspace');
            console.log(this.files);
            this.router.navigate([url]);
        };
        return HomeComponent;
    }());
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-project-view-home',
            templateUrl: 'home.component.html',
            styleUrls: ['home.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, material_1.MdDialog, router_1.Router])
    ], HomeComponent);
    exports.HomeComponent = HomeComponent;
});
//# sourceMappingURL=home.component.js.map