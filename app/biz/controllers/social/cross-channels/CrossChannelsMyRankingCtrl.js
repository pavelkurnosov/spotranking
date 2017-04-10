'use strict';

angular.module('app.biz').controller('CrossChannelsMyRankingsController', function () {
    var vm = this;

    vm.medias = [
        {id: 1, title: 'Facebook', icon: 'facebook'},
        {id: 2, title: 'Twitter', icon: 'twitter'},
        {id: 3, title: 'Google+', icon: 'google-plus'},
        {id: 4, title: 'Instagram', icon: 'instagram'},
        {id: 5, title: 'YouTube', icon: 'youtube'}
    ];

    vm.sortType = 'total'; // set the default sort type
    vm.sortReverse = false;  // set the default sort order

    vm.panes = [
        {id: 'audience', title: 'Audience', active: 'active'},
        {id: 'activity', title: 'Activity'},
        {id: 'engagement', title: 'Engagement'}
    ]
    vm.sources = [];

    var websites = ['', 'www.orange.tn', 'www.ooredoo.dz', 'Djezzy', 'www.mobilis.dz'];
    for (var s = 1; s <= 4; s++) {
        var series = [];
        for (var m in vm.medias) {
            series[series.length] = {
                showInLegend: false,
                name: [vm.medias[m].title],
                data: [Math.round(Math.random() * 100, 2) * (vm.medias[m].title == 'Facebook' ? 100 : 1)]
            };
        }
        vm.sources[vm.sources.length] = {
            id: s,
            title: websites[s],

            total: Math.round(Math.random() * 100 - Math.random() * 100),
            change: Math.round(Math.random() * 100 - Math.random() * 100),
            growth: Math.round(Math.random() * 100),

            data: {
                chart: {type: 'bar', height: 70, backgroundColor: 'rgba(255, 255, 255, 0)'},
                credits: {enabled: false},
                title: {text: ''},
                subtitle: {text: ''},
                xAxis: {lineColor: 'black', categories: ['']},
                exporting: {enabled: false},
                yAxis: {reversedStacks: false, visible: false, gridLineColor: 'transparent', min: 0, title: {text: ''}},
                legend: {reversed: false},
                plotOptions: {series: {stacking: 'normal'}},
                colors: ['#294a83', '#65c1ee', '#b03b2f', '#eb4349', '#4d7ea3'],
                series: series
            }
        };
    }
});