'use strict';

angular.module('app.biz').controller('InstagramMetricsController', function ($state) {
    var vm = this;
    vm.go = function (state, params) {
        $state.go('app.biz.' + state, params);
    };
    vm.data1 = {
        chart: {type: 'bar', height: 300, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        credits: {enabled: false},
        title: {text: ''},
        subtitle: {text: ''},
        xAxis: {
            lineColor: 'black', categories: [
                'Ooredoo',
                'DJEZZY',
                'Mobilis'
            ]
        },
        yAxis: {reversedStacks: false, visible: false, gridLineColor: 'transparent', min: 0, title: {text: ''}},
        legend: {reversed: false},
        plotOptions: {series: {stacking: 'normal'}},
        colors: ['#65c1ee', '#294a83', '#b03b2f', '#eb4349', '#4d7ea3'],
        series: [{
            name: 'Twitter',
            data: [130, 100, 60]
        }, {
            name: 'Facebook',
            data: [40, 12, 20]
        }, {
            name: 'Google+',
            data: [5, 8, 13]
        }, {
            name: 'YouTube',
            data: [7, 4, 12]
        }, {
            name: 'Instagram',
            data: [20, 10, 14]
        }]
    };
});