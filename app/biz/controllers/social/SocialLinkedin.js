'use strict';

angular.module('app.biz').controller('SocialLinkedinController', function ($state, $filter, SocialPages) {
    var vm = this;
    vm.socialPages = SocialPages;
    vm.go = function (state) {
        $state.go('app.biz.' + state);
    };

    vm.tabs = [
        {title: 'Social Posts', state: 'socialLinkedin.socialPosts', active: true},
        {title: 'Metrics', state: 'socialLinkedin.metrics'},
        {title: 'Landscape Comparison', state: 'socialLinkedin.landscapeComparison'},
        {title: 'Bios', state: 'socialLinkedin.bios'},
        {title: 'My Rankings', state: 'socialLinkedin.myRankings'}
    ];

    vm.selectTab = function (tab) {
        $filter('filter')(vm.tabs, {active:true}, true)[0]['active'] = false;
        tab.active = true;
        vm.go(tab.state);
    };
    vm.selectTab($filter('filter')(vm.tabs, {active:true}, true)[0]);
});