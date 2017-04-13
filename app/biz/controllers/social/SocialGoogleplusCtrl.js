'use strict';

angular.module('app.biz').controller('SocialGoogleplusController', function ($state, $filter, SocialPages) {
    var vm = this;
    vm.socialPages = SocialPages;
    vm.go = function (state) {
        $state.go('app.biz.' + state);
    };

    vm.tabs = [
        {title: 'Social Posts', state: 'socialGoogleplus.socialPosts', active: true},
        {title: 'Metrics', state: 'socialGoogleplus.metrics'},
        {title: 'Landscape Comparison', state: 'socialGoogleplus.landscapeComparison'},
        {title: 'Insights', state: 'socialGoogleplus.insights'}
    ];

    vm.selectTab = function (tab) {
        $filter('filter')(vm.tabs, {active:true}, true)[0]['active'] = false;
        tab.active = true;
        vm.go(tab.state);
    };
    vm.selectTab($filter('filter')(vm.tabs, {active:true}, true)[0]);
});