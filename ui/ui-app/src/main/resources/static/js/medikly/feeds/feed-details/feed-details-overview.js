define(['angular','feed-mgr/feeds/edit-feed/module-name'], function (angular, moduleName) {


    var directive = function () {
        return {
            restrict: "EA",
            bindToController: {
                selectedTabIndex:'='
            },
            controllerAs: 'vm',
            scope: {},
            templateUrl: 'js/medikly/feeds/feed-details/feed-details-overview.html',
            controller: "FeedDetailsOverviewController",
            link: function ($scope, element, attrs, controller) {

            }

        };
    }

    var controller =  function($scope,$http,$mdDialog, $filter, FeedService, RestUrlService, HiveService, StateService, Utils) {

    };


    angular.module(moduleName).controller('FeedDetailsOverviewController', ["$scope","$http","$mdDialog","$filter","FeedService","RestUrlService","HiveService","StateService","Utils",controller]);

    angular.module(moduleName)
        .directive('mediklyFeedDetailsOverview', directive);

});


