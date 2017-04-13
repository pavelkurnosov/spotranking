'use strict';

angular.module('app.biz').controller('SocialFacebookController', function ($state, $filter, SocialPages) {
    var vm = this;
    vm.socialPages = SocialPages;
    vm.go = function (state) {
        $state.go('app.biz.' + state);
    };

    vm.tabs = [
        {title: 'Social Posts', state: 'socialFacebook.socialPosts', active: true},
        {title: 'Metrics', state: 'socialFacebook.metrics'},
        {title: 'Landscape Comparison', state: 'socialFacebook.landscapeComparison'},
        // {title: 'Bios', state: 'socialFacebook.bios'},
        {title: 'Insights', state: 'socialFacebook.insights'}
    ];

    vm.selectTab = function (tab) {
        $filter('filter')(vm.tabs, {active:true}, true)[0]['active'] = false;
        tab.active = true;
        vm.go(tab.state);
    };
    vm.selectTab($filter('filter')(vm.tabs, {active:true}, true)[0]);
});