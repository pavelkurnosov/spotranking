"use strict";


angular.module('app.biz', ['ui.router'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.biz', {
                abstract: true,
                data: {
                    title: 'Biz'
                }
            })
            .state('app.biz.dashboard', {
                url: '/dashboard',
                data: {
                    title: 'Dashboard'
                },
                views: {
                    "content@app": {
                        templateUrl: 'app/biz/views/dashboard.html',
                        controller: 'DashboardController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.mainSearch', {
                url: '/main_search',
                data: {
                    title: 'Main Search'
                },
                views: {
                    "content@app": {
                        templateUrl: 'app/biz/views/main-search.html',
                        controller: 'MainSearchController',
                        controllerAs: 'vm'
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
                        controller: 'RtvReportController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.mediaOutlet', {
                url: '/media_outlet',
                data: {
                    title: 'Media Outlet Listing'
                },
                views: {
                    "content@app": {
                        templateUrl: 'app/biz/views/media-outlet.html',
                        controller: 'MediaOutletController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.mediaLibrary', {
                url: '/media_library',
                data: {
                    title: 'OOH Media Library'
                },
                views: {
                    "content@app": {
                        templateUrl: 'app/biz/views/media-library.html',
                        controller: 'MediaLibraryController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.inventoryMap', {
                url: '/inventory_map',
                data: {
                    title: 'OOH Locator'
                },
                views: {
                    "content@app": {
                        templateUrl: 'app/biz/views/inventory-map.html',
                        controller: 'InventoryMapController',
                        controllerAs: 'vm'
                    }
                }
            })
        ;
    })
;
