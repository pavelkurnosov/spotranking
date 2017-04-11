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
            //----------------------- Cross Channels -----------------------------------------------
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

            //------------------------ Facebook ----------------------------------------------
            .state('app.biz.socialFacebook', {
                url: '/social_facebook',
                views: {
                    "content@app": {
                        templateUrl: 'app/biz/views/social/facebook.html',
                        controller: 'SocialFacebookController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialFacebook.socialPosts', {
                url: '/social_posts',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/facebook/social-posts.html',
                        controller: 'FacebookSocialPostsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialFacebook.metrics', {
                url: '/metrics',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/facebook/metrics.html',
                        controller: 'FacebookMetricsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialFacebook.landscapeComparison', {
                url: '/landscape_comparison',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/facebook/landscape-comparison.html',
                        controller: 'FacebookLandscapeComparisonController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialFacebook.bios', {
                url: '/bios',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/facebook/bios.html',
                        controller: 'FacebookBiosController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialFacebook.myRankings', {
                url: '/my_rankings',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/facebook/my-rankings.html',
                        controller: 'FacebookMyRankingsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialFacebook.detailsPosts', {
                url: '/details_posts',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/facebook/details-posts.html',
                        controller: 'FacebookDetailsPostsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialFacebook.detailsActivity', {
                url: '/details_activity',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/facebook/details-activity.html',
                        controller: 'FacebookDetailsActivityController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialFacebook.detailsHashtags', {
                url: '/details_hashtags',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/facebook/details-hashtags.html',
                        controller: 'FacebookDetailsHashtagsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialFacebook.detailsAnalyze', {
                url: '/details_analyze',
                params: {
                    pageTitle: ''
                },
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/facebook/details-analyze.html',
                        controller: 'FacebookDetailsAnalyzeController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialFacebook.detailsBios', {
                url: '/details_bios',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/facebook/details-bios.html',
                        controller: 'FacebookDetailsBiosController',
                        controllerAs: 'vm'
                    }
                }
            })

            //------------------------ Twitter ----------------------------------------------
            .state('app.biz.socialTwitter', {
                url: '/social_twitter',
                views: {
                    "content@app": {
                        templateUrl: 'app/biz/views/social/twitter.html',
                        controller: 'SocialTwitterController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialTwitter.socialPosts', {
                url: '/social_posts',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/twitter/social-posts.html',
                        controller: 'TwitterSocialPostsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialTwitter.metrics', {
                url: '/metrics',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/twitter/metrics.html',
                        controller: 'TwitterMetricsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialTwitter.landscapeComparison', {
                url: '/landscape_comparison',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/twitter/landscape-comparison.html',
                        controller: 'TwitterLandscapeComparisonController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialTwitter.bios', {
                url: '/bios',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/twitter/bios.html',
                        controller: 'TwitterBiosController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialTwitter.myRankings', {
                url: '/my_rankings',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/twitter/my-rankings.html',
                        controller: 'TwitterMyRankingsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialTwitter.detailsPosts', {
                url: '/details_posts',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/twitter/details-posts.html',
                        controller: 'TwitterDetailsPostsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialTwitter.detailsActivity', {
                url: '/details_activity',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/twitter/details-activity.html',
                        controller: 'TwitterDetailsActivityController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialTwitter.detailsHashtags', {
                url: '/details_hashtags',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/twitter/details-hashtags.html',
                        controller: 'TwitterDetailsHashtagsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialTwitter.detailsAnalyze', {
                url: '/details_analyze',
                params: {
                    pageTitle: ''
                },
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/twitter/details-analyze.html',
                        controller: 'TwitterDetailsAnalyzeController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialTwitter.detailsBios', {
                url: '/details_bios',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/twitter/details-bios.html',
                        controller: 'TwitterDetailsBiosController',
                        controllerAs: 'vm'
                    }
                }
            })

            //------------------------ Youtube ----------------------------------------------
            .state('app.biz.socialYoutube', {
                url: '/social_youtube',
                views: {
                    "content@app": {
                        templateUrl: 'app/biz/views/social/youtube.html',
                        controller: 'SocialYoutubeController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialYoutube.socialPosts', {
                url: '/social_posts',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/youtube/social-posts.html',
                        controller: 'YoutubeSocialPostsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialYoutube.metrics', {
                url: '/metrics',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/youtube/metrics.html',
                        controller: 'YoutubeMetricsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialYoutube.landscapeComparison', {
                url: '/landscape_comparison',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/youtube/landscape-comparison.html',
                        controller: 'YoutubeLandscapeComparisonController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialYoutube.bios', {
                url: '/bios',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/youtube/bios.html',
                        controller: 'YoutubeBiosController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialYoutube.myRankings', {
                url: '/my_rankings',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/youtube/my-rankings.html',
                        controller: 'YoutubeMyRankingsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialYoutube.detailsPosts', {
                url: '/details_posts',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/youtube/details-posts.html',
                        controller: 'YoutubeDetailsPostsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialYoutube.detailsActivity', {
                url: '/details_activity',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/youtube/details-activity.html',
                        controller: 'YoutubeDetailsActivityController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialYoutube.detailsHashtags', {
                url: '/details_hashtags',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/youtube/details-hashtags.html',
                        controller: 'YoutubeDetailsHashtagsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialYoutube.detailsAnalyze', {
                url: '/details_analyze',
                params: {
                    pageTitle: ''
                },
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/youtube/details-analyze.html',
                        controller: 'YoutubeDetailsAnalyzeController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialYoutube.detailsBios', {
                url: '/details_bios',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/youtube/details-bios.html',
                        controller: 'YoutubeDetailsBiosController',
                        controllerAs: 'vm'
                    }
                }
            })

            //------------------------ Googleplus ----------------------------------------------
            .state('app.biz.socialGoogleplus', {
                url: '/social_googleplus',
                views: {
                    "content@app": {
                        templateUrl: 'app/biz/views/social/googleplus.html',
                        controller: 'SocialGoogleplusController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialGoogleplus.socialPosts', {
                url: '/social_posts',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/googleplus/social-posts.html',
                        controller: 'GoogleplusSocialPostsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialGoogleplus.metrics', {
                url: '/metrics',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/googleplus/metrics.html',
                        controller: 'GoogleplusMetricsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialGoogleplus.landscapeComparison', {
                url: '/landscape_comparison',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/googleplus/landscape-comparison.html',
                        controller: 'GoogleplusLandscapeComparisonController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialGoogleplus.bios', {
                url: '/bios',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/googleplus/bios.html',
                        controller: 'GoogleplusBiosController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialGoogleplus.myRankings', {
                url: '/my_rankings',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/googleplus/my-rankings.html',
                        controller: 'GoogleplusMyRankingsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialGoogleplus.detailsPosts', {
                url: '/details_posts',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/googleplus/details-posts.html',
                        controller: 'GoogleplusDetailsPostsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialGoogleplus.detailsActivity', {
                url: '/details_activity',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/googleplus/details-activity.html',
                        controller: 'GoogleplusDetailsActivityController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialGoogleplus.detailsHashtags', {
                url: '/details_hashtags',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/googleplus/details-hashtags.html',
                        controller: 'GoogleplusDetailsHashtagsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialGoogleplus.detailsAnalyze', {
                url: '/details_analyze',
                params: {
                    pageTitle: ''
                },
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/googleplus/details-analyze.html',
                        controller: 'GoogleplusDetailsAnalyzeController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialGoogleplus.detailsBios', {
                url: '/details_bios',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/googleplus/details-bios.html',
                        controller: 'GoogleplusDetailsBiosController',
                        controllerAs: 'vm'
                    }
                }
            })

            //------------------------ Linkedin ----------------------------------------------
            .state('app.biz.socialLinkedin', {
                url: '/social_linkedin',
                views: {
                    "content@app": {
                        templateUrl: 'app/biz/views/social/linkedin.html',
                        controller: 'SocialLinkedinController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialLinkedin.socialPosts', {
                url: '/social_posts',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/linkedin/social-posts.html',
                        controller: 'LinkedinSocialPostsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialLinkedin.metrics', {
                url: '/metrics',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/linkedin/metrics.html',
                        controller: 'LinkedinMetricsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialLinkedin.landscapeComparison', {
                url: '/landscape_comparison',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/linkedin/landscape-comparison.html',
                        controller: 'LinkedinLandscapeComparisonController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialLinkedin.bios', {
                url: '/bios',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/linkedin/bios.html',
                        controller: 'LinkedinBiosController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialLinkedin.myRankings', {
                url: '/my_rankings',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/linkedin/my-rankings.html',
                        controller: 'LinkedinMyRankingsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialLinkedin.detailsPosts', {
                url: '/details_posts',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/linkedin/details-posts.html',
                        controller: 'LinkedinDetailsPostsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialLinkedin.detailsActivity', {
                url: '/details_activity',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/linkedin/details-activity.html',
                        controller: 'LinkedinDetailsActivityController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialLinkedin.detailsHashtags', {
                url: '/details_hashtags',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/linkedin/details-hashtags.html',
                        controller: 'LinkedinDetailsHashtagsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialLinkedin.detailsAnalyze', {
                url: '/details_analyze',
                params: {
                    pageTitle: ''
                },
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/linkedin/details-analyze.html',
                        controller: 'LinkedinDetailsAnalyzeController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialLinkedin.detailsBios', {
                url: '/details_bios',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/linkedin/details-bios.html',
                        controller: 'LinkedinDetailsBiosController',
                        controllerAs: 'vm'
                    }
                }
            })
                
            //------------------------ Pinterest ----------------------------------------------
            .state('app.biz.socialPinterest', {
                url: '/social_pinterest',
                views: {
                    "content@app": {
                        templateUrl: 'app/biz/views/social/pinterest.html',
                        controller: 'SocialPinterestController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialPinterest.socialPosts', {
                url: '/social_posts',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/pinterest/social-posts.html',
                        controller: 'PinterestSocialPostsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialPinterest.metrics', {
                url: '/metrics',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/pinterest/metrics.html',
                        controller: 'PinterestMetricsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialPinterest.landscapeComparison', {
                url: '/landscape_comparison',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/pinterest/landscape-comparison.html',
                        controller: 'PinterestLandscapeComparisonController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialPinterest.bios', {
                url: '/bios',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/pinterest/bios.html',
                        controller: 'PinterestBiosController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialPinterest.myRankings', {
                url: '/my_rankings',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/pinterest/my-rankings.html',
                        controller: 'PinterestMyRankingsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialPinterest.detailsPosts', {
                url: '/details_posts',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/pinterest/details-posts.html',
                        controller: 'PinterestDetailsPostsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialPinterest.detailsActivity', {
                url: '/details_activity',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/pinterest/details-activity.html',
                        controller: 'PinterestDetailsActivityController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialPinterest.detailsHashtags', {
                url: '/details_hashtags',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/pinterest/details-hashtags.html',
                        controller: 'PinterestDetailsHashtagsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialPinterest.detailsAnalyze', {
                url: '/details_analyze',
                params: {
                    pageTitle: ''
                },
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/pinterest/details-analyze.html',
                        controller: 'PinterestDetailsAnalyzeController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialPinterest.detailsBios', {
                url: '/details_bios',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/pinterest/details-bios.html',
                        controller: 'PinterestDetailsBiosController',
                        controllerAs: 'vm'
                    }
                }
            })
            
            //------------------------ Instagram ----------------------------------------------
            .state('app.biz.socialInstagram', {
                url: '/social_instagram',
                views: {
                    "content@app": {
                        templateUrl: 'app/biz/views/social/instagram.html',
                        controller: 'SocialInstagramController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialInstagram.socialPosts', {
                url: '/social_posts',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/instagram/social-posts.html',
                        controller: 'InstagramSocialPostsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialInstagram.metrics', {
                url: '/metrics',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/instagram/metrics.html',
                        controller: 'InstagramMetricsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialInstagram.landscapeComparison', {
                url: '/landscape_comparison',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/instagram/landscape-comparison.html',
                        controller: 'InstagramLandscapeComparisonController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialInstagram.bios', {
                url: '/bios',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/instagram/bios.html',
                        controller: 'InstagramBiosController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialInstagram.myRankings', {
                url: '/my_rankings',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/instagram/my-rankings.html',
                        controller: 'InstagramMyRankingsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialInstagram.detailsPosts', {
                url: '/details_posts',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/instagram/details-posts.html',
                        controller: 'InstagramDetailsPostsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialInstagram.detailsActivity', {
                url: '/details_activity',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/instagram/details-activity.html',
                        controller: 'InstagramDetailsActivityController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialInstagram.detailsHashtags', {
                url: '/details_hashtags',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/instagram/details-hashtags.html',
                        controller: 'InstagramDetailsHashtagsController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialInstagram.detailsAnalyze', {
                url: '/details_analyze',
                params: {
                    pageTitle: ''
                },
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/instagram/details-analyze.html',
                        controller: 'InstagramDetailsAnalyzeController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('app.biz.socialInstagram.detailsBios', {
                url: '/details_bios',
                views: {
                    "tabContent": {
                        templateUrl: 'app/biz/views/social/instagram/details-bios.html',
                        controller: 'InstagramDetailsBiosController',
                        controllerAs: 'vm'
                    }
                }
            })

            //------------------------------------------------------------------------------------------------


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
