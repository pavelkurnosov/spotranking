'use strict';

angular.module('app.biz').controller('SocialPinterestController', function ($state, $filter, SocialPages) {
    var vm = this;
    vm.socialPages = SocialPages;
    vm.go = function (state) {
        $state.go('app.biz.' + state);
    };

    vm.tabs = [
        {title: 'Social Posts', state: 'socialPinterest.socialPosts', active: true},
        {title: 'Metrics', state: 'socialPinterest.metrics'},
        {title: 'Landscape Comparison', state: 'socialPinterest.landscapeComparison'},
        // {title: 'Bios', state: 'socialPinterest.bios'},
        {title: 'My Rankings', state: 'socialPinterest.myRankings'}
    ];

    vm.selectTab = function (tab) {
        $filter('filter')(vm.tabs, {active:true}, true)[0]['active'] = false;
        tab.active = true;
        vm.go(tab.state);
    };
    vm.selectTab($filter('filter')(vm.tabs, {active:true}, true)[0]);
});