'use strict';

angular.module('app.biz').controller('LinkedinMyRankingsController', function () {
    var vm = this;

    vm.medias = [
        {id: 1, title: 'Facebook', icon: 'facebook', color: '#3b5998'},
        {id: 2, title: 'Twitter', icon: 'twitter', color: '#55acee'},
        {id: 3, title: 'Google+', icon: 'google-plus', color: '#dd4b39'},
        {id: 4, title: 'Instagram', icon: 'instagram', color: '#8a3ab9'},
        {id: 5, title: 'YouTube', icon: 'youtube', color: '#bb0000'}
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
        var colors = [];
        var series = [];
        for (var m in vm.medias) {
            series[series.length] = {
                showInLegend: false,
                name: [vm.medias[m].title],
                data: [Math.round(Math.random() * 100, 2) * (vm.medias[m].title == 'Facebook' ? 50 : 1)]
            };
            colors[colors.length] = vm.medias[m].color;
        }
        vm.sources[vm.sources.length] = {
            id: s,
            title: websites[s],

            total: Math.round(Math.random() * 100 - Math.random() * 100),
            change: Math.round(Math.random() * 100 - Math.random() * 100),
            growth: Math.round(Math.random() * 100),

            chart: {
                chart: {type: 'bar', height: 70, backgroundColor: 'rgba(255, 255, 255, 0)'},
                credits: {enabled: false},
                title: {text: ''},
                subtitle: {text: ''},
                xAxis: {lineColor: 'black', categories: ['']},
                exporting: {enabled: false},
                yAxis: {reversedStacks: false, visible: false, gridLineColor: 'transparent', min: 0, title: {text: ''}},
                legend: {reversed: false},
                plotOptions: {series: {stacking: 'normal'}},
                colors: colors,
                series: series
            }
        };
    }

    vm.legend = {
        chart: {type: 'bar', height: 70, backgroundColor: 'rgba(255, 255, 255, 0)'},
        credits: {enabled: false},
        title: {text: ''},
        subtitle: {text: ''},
        xAxis: {lineColor: 'black', categories: ['']},
        exporting: {enabled: false},
        yAxis: {reversedStacks: false, visible: false, gridLineColor: 'transparent', min: 0, title: {text: ''}},
        legend: {reversed: false},
        plotOptions: {series: {stacking: 'normal'}},
        colors: colors,
            series: series
    };
});