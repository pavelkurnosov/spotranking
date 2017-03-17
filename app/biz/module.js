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
            .state('app.biz.campaignBreakdown', {
                url: '/campaign_breakdown',
                data: {
                    title: 'Campaign Breakdown'
                },
                views: {
                    "content@app": {
                        templateUrl: 'app/biz/views/campaign-breakdown.html',
                        controller: 'CampaignBreakdownController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialMedia', {
                url: '/social_media',
                data: {
                    title: 'Social Media Engagement'
                },
                views: {
                    "content@app": {
                        templateUrl: 'app/biz/views/social-media.html',
                        controller: 'SocialMediaController',
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
            .state('app.biz.crossChannels', {
                url: '/cross_channels',
                data: {
                    title: 'Cross Channels'
                },
                views: {
                    "content@app": {
                        templateUrl: 'app/biz/views/cross-channels.html',
                        controller: 'CrossChannelsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialFacebook', {
                url: '/social_facebook',
                data: {
                    title: 'Facebook'
                },
                views: {
                    "content@app": {
                        templateUrl: 'app/biz/views/social/facebook.html',
                        controller: 'FacebookController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialTwitter', {
                url: '/social_twitter',
                data: {
                    title: 'Twitter'
                },
                views: {
                    "content@app": {
                        templateUrl: 'app/biz/views/social/twitter.html',
                        controller: 'TwitterController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialYoutube', {
                url: '/social_youtube',
                data: {
                    title: 'YouTube'
                },
                views: {
                    "content@app": {
                        templateUrl: 'app/biz/views/social/youtube.html',
                        controller: 'YoutubeController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialGoogleplus', {
                url: '/social_googleplus',
                data: {
                    title: 'Google +'
                },
                views: {
                    "content@app": {
                        templateUrl: 'app/biz/views/social/googleplus.html',
                        controller: 'GoogleplusController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialLinkedin', {
                url: '/social_linkedin',
                data: {
                    title: 'LinkedIn'
                },
                views: {
                    "content@app": {
                        templateUrl: 'app/biz/views/social/linkedin.html',
                        controller: 'LinkedinController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialPinterest', {
                url: '/social_pinterest',
                data: {
                    title: 'Pinterest'
                },
                views: {
                    "content@app": {
                        templateUrl: 'app/biz/views/social/pinterest.html',
                        controller: 'PinterestController',
                        controllerAs: 'vm'
                    }
                }
            })
        ;
    })
;
