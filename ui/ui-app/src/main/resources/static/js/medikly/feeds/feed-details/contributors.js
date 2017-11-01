/**
 * Created by German on 1/11/17.
 */
define(['angular','feed-mgr/feeds/edit-feed/module-name'], function (angular,moduleName) {


    var directive = function () {
        return {
            restrict: "EA",
            bindToController: {
                selectedTabIndex:'='
            },
            controllerAs: 'vm',
            scope: {},
            templateUrl: 'js/medikly/feeds/feed-details/contributors.component.html',
            controller: "FeedDetailsContributorsController",
            link: function ($scope, element, attrs, controller) {

            }

        };
    }

    var controller =  function($scope,$http,$mdDialog, $filter, FeedService, RestUrlService, HiveService, StateService, Utils) {
        this.canList = ['Can view only', 'Can view and edit', 'Can view, edit, and manage'];
        this.can = this.canList[0];

    };


    angular.module(moduleName).controller('FeedDetailsContributorsController', ["$scope","$http","$mdDialog","$filter","FeedService","RestUrlService","HiveService","StateService","Utils",controller]);

    angular.module(moduleName)
        .directive('feedDetailsContributors', directive);



});


