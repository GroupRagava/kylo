// Hook to avoid caching
var systemLocate = System.locate;
System.locate = function (load) {
    return Promise.resolve(systemLocate.call(this, load)).then(function (address) {
        return address + "?ver=0.8.4"
    });
};

// Configure dependencies
System.config({
    baseURL: "js",
    defaultJSExtensions: true,
    paths: {
        "angular-material-icons":"vendor/angular-material-icons/angular-material-icons",
        "app":"app",
        "bower:": "../bower_components/",
        "cardLayout":"common/card-layout/card-layout",
        "codemirror": "../bower_components/codemirror/lib/codemirror",
        "codemirror/addon/": "../bower_components/codemirror/addon/",
        "codemirror/mode/": "../bower_components/codemirror/mode/",
        "common/module-name": "common/module-name",
        "dirPagination":"vendor/dirPagination/dirPagination",
        "kylo-common":"common/module-require",
        "kylo-common-module":"common/module",
        "kylo-feedmgr":"feed-mgr/module-require",
        "kylo-feedmgr-module":"feed-mgr/module",
        "kylo-opsmgr":"ops-mgr/module-require",
        "kylo-opsmgr-module":"ops-mgr/module",
        "kylo-services":"services/module-require",
        "kylo-services-module":"services/module",
        "kylo-side-nav":"side-nav/module-require",
        "kylo-side-nav-module":"side-nav/module",
        "kyloTimer":"common/timer/kylo-timer",
        "ment-io":"vendor/ment.io/mentio",
        "npm:": "../node_modules/",
        "ng-text-truncate":"vendor/ng-text-truncate/ng-text-truncate",
        "routes": "routes.js",
        "services/module-name":"services/module-name"
    },
    map: {
        '@agm/core': '../assets/medikly_theme/vendors/agm/core/core.umd',
        '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.min',
        '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.min',
        '@angular/common': 'npm:@angular/common/bundles/common.umd.min',
        '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.min',
        '@angular/core': 'npm:@angular/core/bundles/core.umd.min',
        '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.min',
        '@angular/http': 'npm:@angular/http/bundles/http.umd.min',
        '@angular/material': 'npm:@angular/material/bundles/material.umd.min',
        '@angular/flex-layout': '../assets/medikly_theme/vendors/flex-layout/bundles/flex-layout.umd',
        'ngx-perfect-scrollbar': '../assets/medikly_theme/vendors/ngx-perfect-scrollbar/bundles/ngx-perfect-scrollbar.umd',
        'ngx-order-pipe': '../assets/medikly_theme/vendors/ngx-order-pipe/dist/bundles/ngx-order-pipe.umd',
        'ng2-dragula/ng2-dragula': '../assets/medikly_theme/vendors/ng2-dragula/bundles/ng2-dragula.umd',
        'ng-circle-progress': '../assets/medikly_theme/vendors/ng-circle-progress/index',
        'angular2-highcharts': '../assets/medikly_theme/vendors/angular2-highcharts/dist/index',
        'angular2-highcharts/dist/HighchartsService': '../assets/medikly_theme/vendors/angular2-highcharts/dist/HighchartsService',
        'highcharts/highstock': '../assets/medikly_theme/vendors/highcharts/highstock',
        'highcharts/modules/map' : '../assets/medikly_theme/vendors/highcharts/modules/map',
        '@qontu/ngx-inline-editor' : '../assets/medikly_theme/vendors/ngx-inline-editor/ngx-inline-editor.umd',
        'ng2-file-upload/ng2-file-upload': '../assets/medikly_theme/vendors/ng2-file-upload/bundles/ng2-file-upload.umd',
        'ng2-file-upload': '../assets/medikly_theme/vendors/ng2-file-upload/index',
        'ng2-validation': '../assets/medikly_theme/vendors/ng2-validation/bundles/ng2-validation.umd',
        '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.min',
              '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.min',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min',
        '@angular/router': 'npm:@angular/router/bundles/router.umd.min',
        '@angular/router/upgrade': 'npm:@angular/router/bundles/router-upgrade.umd.min',
        '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd',
        '@angular/upgrade/static': 'npm:@angular/upgrade/bundles/upgrade-static.umd',
        '@covalent/core': 'npm:@covalent/core/core.umd',
        '@uirouter/angular': 'npm:@uirouter/angular/_bundles/ui-router-ng2',
        '@uirouter/angular-hybrid': 'npm:@uirouter/angular-hybrid/_bundles/ui-router-angular-hybrid',
        '@uirouter/angularjs': 'npm:@uirouter/angularjs/release/angular-ui-router',
        '@uirouter/core': 'npm:@uirouter/core/_bundles/ui-router-core',
        '@uirouter/rx': 'npm:@uirouter/rx/_bundles/ui-router-rx',
        "angular":"bower:angular/angular.min",
        "angular-drag-and-drop-lists":"bower:angular-drag-and-drop-lists/angular-drag-and-drop-lists.min",
        "angular-material-data-table":"bower:angular-material-data-table/dist/md-data-table.min",
        "angular-material-expansion-panel":"bower:angular-material-expansion-panel/dist/md-expansion-panel.min",
        "angular-nvd3":"bower:angular-nvd3/dist/angular-nvd3.min",
        "angular-sanitize":"bower:angular-sanitize/angular-sanitize.min",
        "angular-ui-codemirror":"bower:angular-ui-codemirror/ui-codemirror.min",
        "angular-ui-grid":"bower:angular-ui-grid/ui-grid.min",
        "angular-visjs":"bower:angular-visjs/angular-vis",
        "angularAnimate":"bower:angular-animate/angular-animate.min",
        "angularAria":"bower:angular-aria/angular-aria.min",
        "angularLocalStorage": "bower:angularLocalStorage/dist/angularLocalStorage.min",
        "angularMaterial":"bower:angular-material/angular-material.min",
        "angularMessages":"bower:angular-messages/angular-messages.min",
        "c3":"bower:c3/c3.min",
        "d3":"bower:d3/d3.min",
        "draggabilly":"bower:draggabilly/dist/draggabilly.pkgd.min",
        "fattable": "bower:fattable/fattable",
        "gsap": "bower:gsap/src/uncompressed/TweenMax",
        "jquery":"bower:jquery/dist/jquery.min",
        "jquery-ui":"bower:jquery-ui/jquery-ui.min",
        "lz-string": "bower:lz-string/libs/lz-string.min",
        "moment":"bower:moment/min/moment.min",
        "showdown": "../assets/medikly_theme/vendors/showdown/dist/showdown",
        'ng-fx':"bower:ngFx/dist/ngFx.min",
        "nvd3": "bower:nvd3/build/nv.d3.min",
        "ocLazyLoad":"bower:oclazyload/dist/ocLazyLoad.require",
        "pivottable": "bower:pivottable/dist/pivot.min",
        "pivottable-c3-renderers":"bower:pivottable/dist/c3_renderers.min",
        "requirejs": "bower:requirejs/require",
        'rxjs': 'npm:rxjs',
        "svg-morpheus":"bower:svg-morpheus/compile/unminified/svg-morpheus",
        "underscore":"bower:underscore/underscore-min",
        "vis":"bower:vis/dist/vis.min"
    },
    meta: {
        "@angular/core": {deps:["angular"]},
        "angular": {deps:["jquery"],exports: "angular"},
        'angularAria': ['angular'],
        'angularMessages': ['angular'],
        'angularAnimate': ['angular'],
        'angularMaterial': ['angular','angularAnimate','angularAria','angularMessages'],
        'angular-material-expansion-panel':['angular'],
        'angular-material-icons':['angular'],
        'angular-material-data-table':['angular'],
        "angular-nvd3":['angular','nvd3'],
        "angular-sanitize":["angular"],
        'angular-ui-grid':['angular','angularAnimate'],
        'angular-ui-codemirror':['angular','codemirror'],
        'angular-visjs':['angular','vis'],
        "codemirror-pig": ["codemirror"],
        "codemirror-properties":["codemirror"],
        "codemirror-python":["codemirror"],
        "codemirror-xml":["codemirror"],
        "codemirror-shell":["codemirror"],
        "codemirror-javascript":["codemirror"],
        "codemirror-sql":["codemirror"],
        "codemirror-show-hint":["codemirror"],
        "codemirror-sql-hint":["codemirror"],
        "codemirror-xml-hint":["codemirror"],
        "codemirror-groovy":["codemirror"],
        "codemirror-dialog":["codemirror"],
        'd3':{exports:'d3'},
        'dirPagination':['angular'],
        "jquery-ui":["jquery"],
        'ocLazyLoad':['angular'],
        'kylo-services-module':{deps:['angular','jquery']},
        'kylo-services':{deps:['angular','kylo-services-module','jquery']},
        'kylo-common-module':{deps:['angular','jquery']},
        'kylo-common':{deps:['angular','kylo-services','kylo-common-module','jquery','angular-material-icons'], exports:'kylo-common', format:"amd"},
        'kylo-feedmgr-module':{deps:['angular','jquery']},
        'kylo-feedmgr':{deps:['angular','kylo-services','kylo-common','kylo-feedmgr-module']},
        'kylo-opsmgr-module':{deps:['angular','jquery']},
        'kylo-opsmgr':{deps:['angular','kylo-services','kylo-common','kylo-opsmgr-module']},
        'kylo-side-nav-module':{deps:['angular','jquery']},
        'kylo-side-nav':{deps:['angular','kylo-services','jquery','angular-material-icons','kylo-side-nav-module'], exports:'kylo-side-nav', format:"amd"},
        'ment-io':['angular'],
        "ng-fx":{deps:["gsap"]},
        "ng-text-truncate":["angular"],
        'nvd3':{deps:['d3'],exports:'nv'},
        'pivottable':{deps:['c3','jquery']},
        "pivottable-c3-renderers":{deps:['pivottable']},
        'vis':{exports:"vis"},
        'app':{deps:['ocLazyLoad','underscore','angularMaterial','jquery','angular-sanitize','ng-text-truncate'], exports:'app', format: "amd"},
        'routes':{deps:['app'], exports:'routes', format: "amd"}
    }
});
