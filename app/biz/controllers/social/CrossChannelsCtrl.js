'use strict';

angular.module('app.biz').controller('CrossChannelsController', function ($state, $filter, SocialPages) {
    var vm = this;
    vm.socialPages = SocialPages;
    vm.go = function (state) {
        $state.go('app.biz.' + state);
    };

    vm.tabs = [
        {title: 'Social Posts', state: 'crossChannels.socialPosts', active: true},
        {title: 'Metrics', state: 'crossChannels.metrics'},
        {title: 'Landscape Comparison', state: 'crossChannels.landscapeComparison'},
        {title: 'Bios', state: 'crossChannels.bios'},
        {title: 'My Rankings', state: 'crossChannels.myRankings'}
    ];

    vm.selectTab = function (tab) {
        $filter('filter')(vm.tabs, {active:true}, true)[0]['active'] = false;
        tab.active = true;
        vm.go(tab.state);
    };
    vm.selectTab($filter('filter')(vm.tabs, {active:true}, true)[0]);

});