import {Input, OnDestroy, OnInit} from "@angular/core";
import {IAngularStatic} from "angular";

declare const angular: IAngularStatic;

const moduleName = require("feed-mgr/visual-query/module-name");

/**
 * Displays the Visual Query page.
 */
export class HomeComponent implements OnInit, OnDestroy {
    /**
     * Constructs a {@code VisualQueryComponent}.
     */
    constructor($scope: angular.IScope, private SideNavService: any, private StateService: any) {
        // Manage the sidebar navigation
        SideNavService.hideSideNav();
        $scope.$on("$destroy", this.ngOnDestroy.bind(this));
    }

    /**
     * Resets the side state.
     */
    ngOnDestroy(): void {
        this.SideNavService.showSideNav();
    }

    ngOnInit(): void {

    }
}



angular.module(moduleName).component('visualQuery', {
    bindings: {
        engine: "<"
    },
    controller: ["$scope", "SideNavService", "StateService", HomeComponent],
    controllerAs: "vm",
    templateUrl: "js/medikly/home/home.component.html"
});
