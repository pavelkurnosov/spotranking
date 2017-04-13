'use strict';

angular.module('app.biz').controller('SocialTwitterController', function ($state, $filter, SocialPages) {
    var vm = this;
    vm.socialPages = SocialPages;
    vm.go = function (state) {
        $state.go('app.biz.' + state);
    };

    vm.tabs = [
        {title: 'Social Posts', state: 'socialTwitter.socialPosts', active: true},
        {title: 'Metrics', state: 'socialTwitter.metrics'},
        {title: 'Landscape Comparison', state: 'socialTwitter.landscapeComparison'},
        // {title: 'Bios', state: 'socialTwitter.bios'},
        {title: 'Insights', state: 'socialFacebook.insights'}
    ];

    vm.selectTab = function (tab) {
        $filter('filter')(vm.tabs, {active:true}, true)[0]['active'] = false;
        tab.active = true;
        vm.go(tab.state);
    };
    vm.selectTab($filter('filter')(vm.tabs, {active:true}, true)[0]);
});