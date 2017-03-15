'use strict';

angular.module('app.biz').controller('SocialMediaController', function ($scope) {
    var vm = this;
    vm.socialWebsites = [
        {name: "Twitter"},
        {name: "Facebook"},
        {name: "Youtube"},
        {name: "Google+"},
        {name: "LinkedIn"},
        {name: "Instagram"}
    ];

    vm.tops = [
        {title: "Top Comment", amount: 78, icon: "comments"},
        {title: "Top Shared", amount: 9, icon: "twitter"},
        {title: "Top Likes", amount: 30, icon: "facebook"},
        {title: "Top Viewed", amount: 218, icon: "eye"}
    ];

    vm.socialSummaries = [
        {title: "Twitter", amount: 332},
        {title: "Facebook", amount: 240},
        {title: "LinkedIn", amount: 74},
        {title: "Google+", amount: 45},
        {title: "YouTube", amount: 82},
        {title: "Blogs", amount: 290},
    ];

    vm.barChartData = [
        {
            "data": [[0, 3]],
            "bars": {"show": true, "barWidth": 1, "order": 1}
        }, {
            "data": [[0, 9]],
            "bars": {"show": true, "barWidth": 1, "order": 2}
        }, {
            "data": [[0, 5]],
            "bars": {"show": true, "barWidth": 1, "order": 3}
        }
    ];

});