define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var moduleName = require("feed-mgr/visual-query/module-name");
    /**
     * Displays the Visual Query page.
     */
    var HomeComponent = (function () {
        /**
         * Constructs a {@code VisualQueryComponent}.
         */
        function HomeComponent($scope, SideNavService, StateService) {
            this.SideNavService = SideNavService;
            this.StateService = StateService;
            // Manage the sidebar navigation
            SideNavService.hideSideNav();
            $scope.$on("$destroy", this.ngOnDestroy.bind(this));
        }
        /**
         * Resets the side state.
         */
        HomeComponent.prototype.ngOnDestroy = function () {
            this.SideNavService.showSideNav();
        };
        HomeComponent.prototype.ngOnInit = function () {
        };
        return HomeComponent;
    }());
    exports.HomeComponent = HomeComponent;
    angular.module(moduleName).component('visualQuery', {
        bindings: {
            engine: "<"
        },
        controller: ["$scope", "SideNavService", "StateService", HomeComponent],
        controllerAs: "vm",
        templateUrl: "js/medikly/home/home.component.html"
    });
});
//# sourceMappingURL=home.component.js.map