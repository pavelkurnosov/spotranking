'use strict';

angular.module('app.biz').controller('CrossChannelsMyRankingsController', function ($timeout) {
    var vm = this;

    /* yOUTUBE : HEX: bb0000.
     Facebook:#3b5998
     twitter :  #55ACEE
     Google +"#dd4b39
     Pinterest: C92228
     Linkedin: #0077B5
     Instagram: #8a3ab9 */

    vm.medias = [
        {id: 1, title: 'Facebook', icon: 'facebook', color: '#3b5998'},
        {id: 2, title: 'Twitter', icon: 'twitter', color: '#55acee'},
        {id: 3, title: 'Google+', icon: 'google-plus', color: '#dd4b39'},
        {id: 4, title: 'Instagram', icon: 'instagram', color: '#8a3ab9'},
        {id: 5, title: 'YouTube', icon: 'youtube', color: '#bb0000'}
    ];

    vm.sortType = 'total';
    vm.sortReverse = false;

    vm.panes = [
        {id: 'audience', title: 'Audience', active: 'active'},
        {id: 'activity', title: 'Activity'},
        {id: 'engagement', title: 'Engagement'}
    ];
    vm.currTab = 'audience';

    vm.totalData = [{
        company: 'Djezzy',
        values: {
            audience: {total: 4162412, change: 855, growth: 0.02},
            activity: {total: 37, change: -11, growth: -22.92},
            engagement: {total: 10646, change: -5268, growth: -33.1}
        }
    }, {
        company: 'www.mobilis.dz',
        values: {
            audience: {total: 2522924, change: 12164, growth: 0.48},
            activity: {total: 11, change: -5, growth: -31.25},
            engagement: {total: 20556, change: -3309, growth: -13.87}
        }
    }, {
        company: 'www.ooredoo.dz',
        values: {
            audience: {total: 4496831, change: 42194, growth: 0.95},
            activity: {total: 16, change: -5, growth: -23.81},
            engagement: {total: 636610, change: 154003, growth: 31.91}
        }
    }, {
        company: 'www.orange.tn',
        values: {
            audience: {total: 23768879, change: 79714, growth: 0.34},
            activity: {total: 20, change: -2, growth: -9.09},
            engagement: {total: 641, change: -104, growth: -13.96}
        }
    }];
    vm.displayColumnInChart = 'growth';

    for (var d in vm.totalData) {
        for (var v in vm.totalData[d].values) {
            vm.totalData[d].values[v].chart = {
                chart: {type: 'bar', height: 70, backgroundColor: 'rgba(255, 255, 255, 0)'},
                credits: {enabled: false},
                title: {text: ''},
                subtitle: {text: ''},
                exporting: {enabled: false},
                xAxis: {lineColor: 'black', categories: ['']},
                yAxis: {reversedStacks: false, visible: false, gridLineColor: 'transparent', title: {text: ''}},
                legend: {reversed: false},
                plotOptions: {series: {stacking: 'normal'}},
                colors: ['#3b5998'],
                series: [{
                    showInLegend: false,
                    name: vm.totalData[d]['company'] + ' ' + v,
                    data: [vm.totalData[d].values[v][vm.displayColumnInChart]]
                }]
            };
        }
    }
    vm.tabSelect = function () {
        vm.chartDisplay = false;
        var ary = [];
        for (var d in vm.totalData) {
            ary[ary.length] = vm.totalData[d].values[vm.currTab][vm.displayColumnInChart];
        }
        var min = ary.reduce(function (a, b) {
            return Math.min(a, b);
        });
        var max = ary.reduce(function (a, b) {
            return Math.max(a, b);
        });
        for (var d in vm.totalData) {
            vm.totalData[d]['values'][vm.currTab]['chart']['yAxis']['min'] = min;
            vm.totalData[d]['values'][vm.currTab]['chart']['yAxis']['max'] = max;
        }
        $timeout(function () {
            vm.chartDisplay = true;
        }, 500);
    };
    vm.tabSelect();
});