define(['angular', 'medikly/home/module-name', 'kylo-utils/LazyLoadUtil', 'constants/AccessConstants', 'kylo-common', 'kylo-services', 'kylo-opsmgr'], function (angular, moduleName, lazyLoadUtil, AccessConstants) {
    var module = angular.module(moduleName, []);


    /**
     * LAZY loaded in from /app.js
     */
    module.config(["$stateProvider", "$compileProvider", function ($stateProvider, $compileProvider) {
        $stateProvider.state(AccessConstants.UI_STATES.DASHBOARD.state, {
            url: "/homepage",
            params: {
                engine: null
            },
            views: {
                "content": {
                    component: "HomeComponent"
                }
            },
            resolve: {

                loadMyCtrl: lazyLoadController(["medikly/home/home.component"])
            },
            data: {
                breadcrumbRoot: true,
                displayName: "Welcome to Medikly",
                module: moduleName,
                permissions: AccessConstants.UI_STATES.DASHBOARD.permissions
            }
        });

        function lazyLoadController(path) {
            return lazyLoadUtil.lazyLoadController(path, "medikly/home/module-require", true);
        }
    }]);

    // module.run(['$ocLazyLoad', function ($ocLazyLoad) {
    //     $ocLazyLoad.load({
    //         name: 'kylo', files: ["bower_components/fattable/fattable.css",
    //             "js/feed-mgr/visual-query/visual-query.component.css",
    //             "js/feed-mgr/visual-query/build-query/flowchart/flowchart.css",
    //             "js/feed-mgr/visual-query/transform-data/transform-data.component.css"
    //         ]
    //     })
    // }]);

    return module;







});


