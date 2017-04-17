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
        {id: 'facebook', title: 'Facebook', icon: 'facebook', color: '#3b5998'},
        {id: 'twitter', title: 'Twitter', icon: 'twitter', color: '#55acee'},
        {id: 'googleplus', title: 'Google+', icon: 'google-plus', color: '#dd4b39'},
        {id: 'instagram', title: 'Instagram', icon: 'instagram', color: '#8a3ab9'},
        {id: 'youtube', title: 'YouTube', icon: 'youtube', color: '#bb0000'}
    ];

    vm.sortType = 'total';
    vm.sortReverse = false;
    vm.currTab = 'audience';

    vm.statData = {
        audience: {
            title: 'Audience',
            active: 'active',
            data: [{
                company: 'Djezzy',
                previous_amount: 4161557,
                facebook: {amount: 4003329, change: 902, growth: 0.02},
                twitter: {amount: 123776, change: -104, growth: -0.08},
                googleplus: {amount: 2135, change: -2, growth: -0.09},
                instagram: {amount: 4529, change: 9, growth: 0.2},
                youtube: {amount: 28643, change: 50, growth: 0.17}
            }, {
                company: 'www.mobilis.dz',
                previous_amount: 2510760,
                facebook: {amount: 2315861, change: 11715, growth: 0.51},
                twitter: {amount: 97198, change: 297, growth: 0.31},
                googleplus: {amount: 3533, change: 4, growth: 0.11},
                instagram: {amount: 28370, change: 65, growth: 0.23},
                youtube: {amount: 77962, change: 83, growth: 0.11}
            }, {
                company: 'www.ooredoo.dz',
                previous_amount: 4454637,
                facebook: {amount: 4479289, change: 42166, growth: 0.95},
                twitter: {amount: 15841, change: 30, growth: 0.19},
                googleplus: {amount: 1698, change: -2, growth: -0.12},
                instagram: {amount: 0, change: 0, growth: 0},
                youtube: {amount: 3, change: 0, growth: 0}
            }, {
                company: 'www.orange.tn',
                previous_amount: 23689165,
                facebook: {amount: 23173316, change: 79581, growth: 0.34},
                twitter: {amount: 240472, change: 85, growth: 0.04},
                googleplus: {amount: 324128, change: 4, growth: 0},
                instagram: {amount: 27005, change: 43, growth: 0.16},
                youtube: {amount: 3958, change: 1, growth: 0.03}
            }]
        },
        activity: {
            title: 'Activity',
            data: [{
                company: 'Djezzy',
                previous_amount: 48,
                facebook: {amount: 10, change: -4, growth: -28.57},
                twitter: {amount: 16, change: -7, growth: -30.43},
                googleplus: {amount: 9, change: 1, growth: 12.5},
                instagram: {amount: 0, change: -3, growth: 0},
                youtube: {amount: 2, change: 2, growth: 0}
            }, {
                company: 'www.mobilis.dz',
                previous_amount: 16,
                facebook: {amount: 10, change: -6, growth: -37.5},
                twitter: {amount: 1, change: 1, growth: 0},
                googleplus: {amount: 0, change: 0, growth: 0},
                instagram: {amount: 0, change: 0, growth: 0},
                youtube: {amount: 0, change: 0, growth: 0}
            }, {
                company: 'www.ooredoo.dz',
                previous_amount: 21,
                facebook: {amount: 13, change: -2, growth: -13.33},
                twitter: {amount: 3, change: -3, growth: -50},
                googleplus: {amount: 0, change: 0, growth: 0},
                instagram: {amount: 0, change: 0, growth: 0},
                youtube: {amount: 0, change: 0, growth: 0}
            }, {
                company: 'www.orange.tn',
                previous_amount: 22,
                facebook: {amount: 3, change: 1, growth: 50},
                twitter: {amount: 11, change: 0, growth: 0},
                googleplus: {amount: 6, change: -3, growth: -33.33},
                instagram: {amount: 0, change: 0, growth: 0},
                youtube: {amount: 0, change: 0, growth: 0}
            }]
        },
        engagement: {
            title: 'Engagement',
            data: [{
                company: 'Djezzy',
                previous_amount: 15914,
                facebook: {amount: 9904, change: -5492, growth: -35.67},
                twitter: {amount: 189, change: -193, growth: -50.52},
                googleplus: {amount: 45, change: 6, growth: 15.38},
                instagram: {amount: 0, change: -97, growth: 0},
                youtube: {amount: 508, change: 508, growth: 0}
            }, {
                company: 'www.mobilis.dz',
                previous_amount: 23865,
                facebook: {amount: 20528, change: -3337, growth: -13.98},
                twitter: {amount: 28, change: 28, growth: 0},
                googleplus: {amount: 0, change: 0, growth: 0},
                instagram: {amount: 0, change: 0, growth: 0},
                youtube: {amount: 0, change: 0, growth: 0}
            }, {
                company: 'www.ooredoo.dz',
                previous_amount: 482607,
                facebook: {amount: 636606, change: 154022, growth: 31.92},
                twitter: {amount: 4, change: -19, growth: -82.61},
                googleplus: {amount: 0, change: 0, growth: 0},
                instagram: {amount: 0, change: 0, growth: 0},
                youtube: {amount: 0, change: 0, growth: 0}
            }, {
                company: 'www.orange.tn',
                previous_amount: 745,
                facebook: {amount: 63, change: 6, growth: 10.53},
                twitter: {amount: 569, change: -102, growth: -15.2},
                googleplus: {amount: 9, change: -8, growth: -47.06},
                instagram: {amount: 0, change: 0, growth: 0},
                youtube: {amount: 0, change: 0, growth: 0}
            }]
        }
    };


    vm.calcTotal = function (division) {    // division : audience, activity or engagement.
        for (var c in vm.statData[division]['data']) {      // companies
            var amountTotal = 0, changeTotal = 0, growthTotal = 0;
            for (var m in vm.medias) {
                amountTotal += vm.statData[division]['data'][c][vm.medias[m].id]['amount'] * 1;
                changeTotal += vm.statData[division]['data'][c][vm.medias[m].id]['change'] * 1;
                growthTotal += vm.statData[division]['data'][c][vm.medias[m].id]['growth'] * 1;
            }
            vm.statData[division]['data'][c]['total_amount'] = amountTotal;
            vm.statData[division]['data'][c]['total_change'] = changeTotal;
            vm.statData[division]['data'][c]['total_growth'] = Math.round((amountTotal - vm.statData[division]['data'][c]['previous_amount']) / amountTotal * 10000) / 100;

            var categories = [];
            var colors = [];
            var series = [];

            for (var m in vm.medias) {
                categories[categories.length] = '';
                colors[colors.length] = vm.medias[m].color;
                // series[series.length] = vm.statData[division]['data'][c]['total_amount'];
            }
            vm.statData[division]['data'][c]['chart'] = {
                chart: {type: 'bar', height: 70, backgroundColor: 'rgba(255, 255, 255, 0)'},
                credits: {enabled: false},
                title: {text: ''},
                subtitle: {text: ''},
                exporting: {enabled: false},
                xAxis: {lineColor: 'black', categories: [categories]},
                yAxis: {reversedStacks: false, visible: false, gridLineColor: 'transparent', title: {text: ''}},
                legend: {reversed: false},
                plotOptions: {series: {stacking: 'normal'}},
                colors: colors,
                series: [{
                    showInLegend: false,
                    name: 'abcd',
                    data: [12,32]
                }]
            };     // to be inserted chart data.
        }
    };
    vm.calcTotal('audience');
    vm.calcTotal('activity');
    vm.calcTotal('engagement');
    console.log(vm.statData);

    vm.columnClick = function (colId) {
        vm.sortType = 'total_' + colId;
        vm.displayColumnInChart = colId;
        vm.sortReverse = !vm.sortReverse;
    };


    //--------------------------------------------------------------------------------------------------------


    /*vm.sortType = 'total';
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
     vm.redrawChart = function () {
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
     vm.redrawChart();

     vm.columnClick = function (colId) {
     vm.sortType = colId;
     vm.displayColumnInChart = colId;
     vm.sortReverse = !vm.sortReverse;
     vm.redrawChart();
     };*/
});