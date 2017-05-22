'use strict';

angular.module('app.biz').controller('MarketingActivityController', function ($scope) {
    var vm = this;
    vm.socialWebsites = [
        {name: "Facebook"},
        {name: "Twitter"},
        {name: "Youtube"},
        {name: "Google+"},
        {name: "Pinterest"}
    ];

});