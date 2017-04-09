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
            //----------------------------------------------------------------------
            .state('app.biz.crossChannels', {
                url: '/cross_channels',
                views: {
                    "content@app": {
                        templateUrl: 'app/biz/views/social/cross-channels.html',
                        controller: 'CrossChannelsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.crossChannels.socialPosts', {
                url: '/social_posts',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/cross-channels/social-posts.html',
                        controller: 'CrossChannelsSocialPostsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.crossChannels.metrics', {
                url: '/metrics',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/cross-channels/metrics.html',
                        controller: 'CrossChannelsMetricsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.crossChannels.landscapeComparison', {
                url: '/landscape_comparison',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/cross-channels/landscape-comparison.html',
                        controller: 'CrossChannelsLandscapeComparisonController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.crossChannels.bios', {
                url: '/bios',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/cross-channels/bios.html',
                        controller: 'CrossChannelsBiosController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.crossChannels.myRankings', {
                url: '/my_rankings',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/cross-channels/my-rankings.html',
                        controller: 'CrossChannelsMyRankingsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.crossChannels.detailsPosts', {
                url: '/details_posts',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/cross-channels/details-posts.html',
                        controller: 'CrossChannelsDetailsPostsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.crossChannels.detailsActivity', {
                url: '/details_activity',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/cross-channels/details-activity.html',
                        controller: 'CrossChannelsDetailsActivityController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.crossChannels.detailsHashtags', {
                url: '/details_hashtags',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/cross-channels/details-hashtags.html',
                        controller: 'CrossChannelsDetailsHashtagsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.crossChannels.detailsAnalyze', {
                url: '/details_analyze',
                params: {
                    pageTitle: ''
                },
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/cross-channels/details-analyze.html',
                        controller: 'CrossChannelsDetailsAnalyzeController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.crossChannels.detailsBios', {
                url: '/details_bios',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/cross-channels/details-bios.html',
                        controller: 'CrossChannelsDetailsBiosController',
                        controllerAs: 'vm'
                    }
                }
            })
            //----------------------------------------------------------------------
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
            .state('app.biz.socialInstagram', {
                url: '/social_instagram',
                data: {
                    title: 'Instagram'
                },
                views: {
                    "content@app": {
                        templateUrl: 'app/biz/views/social/instagram.html',
                        controller: 'InstagramController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.ComparingPerform', {
                url: '/comparing_performance',
                data: {
                    title: 'Comparing Performance'
                },
                views: {
                    "content@app": {
                        templateUrl: 'app/biz/views/comparing-perform.html',
                        controller: 'ComparingPerformController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.GeographicalCoverage', {
                url: '/geographical_coverage',
                data: {
                    title: 'Geographical Coverage'
                },
                views: {
                    "content@app": {
                        templateUrl: 'app/biz/views/geographical-coverage.html',
                        controller: 'GeographicalCoverageController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.MeasuringOutput', {
                url: '/measuring_output',
                data: {
                    title: 'Measuring Output'
                },
                views: {
                    "content@app": {
                        templateUrl: 'app/biz/views/measuring-output.html',
                        controller: 'MeasuringOutputController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.BrandCompetition', {
                url: '/brand_competition',
                data: {
                    title: 'Brand Competition'
                },
                views: {
                    "content@app": {
                        templateUrl: 'app/biz/views/brand-competition.html',
                        controller: 'BrandCompetitionController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.Opportunity', {
                url: '/opportunity',
                data: {
                    title: 'Opportunity'
                },
                views: {
                    "content@app": {
                        templateUrl: 'app/biz/views/opportunity.html',
                        controller: 'OpportunityController',
                        controllerAs: 'vm'
                    }
                }
            })
        ;
    })
;
