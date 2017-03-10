"use strict";


angular.module('app.biz', ['ui.router'])
.config(function ($stateProvider) {
    $stateProvider
        .state('app.biz', {})
        .state('app.biz.mainSearch', {
            url: '/main_search',
            data: {
                title: 'Main Search'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/biz/views/main-search.html',
                    controller: 'MainSearchController'
                }
            }
        })
        .state('app.biz.rtvReport', {
            url: '/rtv_report',
            data: {
                title: 'RTV AD Airing Certificate'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/biz/views/rtv-report.html',
                    controller: 'RtvReportController'
                }
            }
        })
});
