'use strict';

angular.module('app.biz').controller('SocialInstagramController', function ($state, $filter, SocialPages) {
    var vm = this;
    vm.socialPages = SocialPages;
    vm.go = function (state) {
        $state.go('app.biz.' + state);
    };

    vm.tabs = [
        {title: 'Social Posts', state: 'socialInstagram.socialPosts', active: true},
        {title: 'Metrics', state: 'socialInstagram.metrics'},
        {title: 'Landscape Comparison', state: 'socialInstagram.landscapeComparison'},
        // {title: 'Bios', state: 'socialInstagram.bios'},
        {title: 'My Rankings', state: 'socialInstagram.myRankings'}
    ];

    vm.selectTab = function (tab) {
        $filter('filter')(vm.tabs, {active:true}, true)[0]['active'] = false;
        tab.active = true;
        vm.go(tab.state);
    };
    vm.selectTab($filter('filter')(vm.tabs, {active:true}, true)[0]);
});