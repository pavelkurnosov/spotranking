'use strict';

/**
 * @ngdoc overview
 * @name app [smartadminApp]
 * @description
 * # app [smartadminApp]
 *
 * Main module of the application.
 */

angular.module('app', [
    'ngSanitize',
    'ngAnimate',
    'restangular',
    'ui.router',
    'ui.bootstrap',
    'datatables', 'datatables.buttons', 'datatables.bootstrap',

    // Smartadmin Angular Common Module
    'SmartAdmin',

    // App
    'app.auth',
    'app.layout',
    //'app.chat',
    //'app.dashboard',
    //'app.calendar',
    //'app.inbox',
    'app.graphs',
    'app.tables',
    'app.forms',
    'app.ui',
    'app.widgets',
    'app.maps',
    //'app.appViews',
    // 'app.misc',
    //'app.smartAdmin',
    //'app.eCommerce'
    'app.home',
    'app.biz',
    'ngBootstrap',
    'ngTagCloud',
    'ngTagsInput'
])
    .config(function ($provide, $httpProvider, RestangularProvider) {

        // Intercept http calls.
        $provide.factory('ErrorHttpInterceptor', function ($q) {
            var errorCounter = 0;

            function notifyError(rejection) {
                var msgText = angular.isUndefined(rejection.data.message) ? rejection.data : rejection.data.message;
                $.bigBox({
                    title: rejection.status + ' ' + rejection.statusText,
                    content: msgText,
                    color: "#C46A69",
                    icon: "fa fa-warning shake animated",
                    number: ++errorCounter,
                    timeout: 6000
                });
            }

            return {
                // On request failure
                requestError: function (rejection) {
                    // show notification
                    notifyError(rejection);

                    // Return the promise rejection.
                    return $q.reject(rejection);
                },

                // On response failure
                responseError: function (rejection) {
                    // show notification
                    notifyError(rejection);
                    // Return the promise rejection.
                    return $q.reject(rejection);
                }
            };
        });

        // Add the interceptor to the $httpProvider.
        $httpProvider.interceptors.push('ErrorHttpInterceptor');

        RestangularProvider.setBaseUrl(location.pathname.replace(/[^\/]+?$/, ''));

    })
    .constant('APP_CONFIG', window.appConfig)
    .constant('ServerURL', 'http://platform.spotranking.com/index.php?r=api/apiv2/')

    .filter('camelCase', function () {
        return function (input) {
            input = input || '';
            input = input.replace(/_/g, " ");
            return input.replace(/\w\S*/g, function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        };
    })

    .run(function ($rootScope, $state, $stateParams, $location, $timeout, UserService) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        // editableOptions.theme = 'bs3';

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            if (toState.name != 'login') {
                if (!UserService.isLoggedIn()) {
                    event.preventDefault();
                    $state.go('login');
                }
            }
        });
    })
;

