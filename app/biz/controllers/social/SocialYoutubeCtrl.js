'use strict';

angular.module('app.biz').controller('SocialYoutubeController', function ($state, $filter, SocialPages) {
    var vm = this;
    vm.socialPages = SocialPages;
    vm.go = function (state) {
        $state.go('app.biz.' + state);
    };

    vm.tabs = [
        {title: 'Social Posts', state: 'socialYoutube.socialPosts', active: true},
        {title: 'Metrics', state: 'socialYoutube.metrics'},
        {title: 'Landscape Comparison', state: 'socialYoutube.landscapeComparison'},
        // {title: 'Bios', state: 'socialYoutube.bios'},
        {title: 'My Rankings', state: 'socialYoutube.myRankings'}
    ];

    vm.selectTab = function (tab) {
        $filter('filter')(vm.tabs, {active:true}, true)[0]['active'] = false;
        tab.active = true;
        vm.go(tab.state);
    };
    vm.selectTab($filter('filter')(vm.tabs, {active:true}, true)[0]);
});