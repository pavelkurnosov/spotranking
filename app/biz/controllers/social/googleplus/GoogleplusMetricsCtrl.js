'use strict';

angular.module('app.biz').controller('GoogleplusMetricsController', function ($state) {
    var vm = this;
    vm.go = function (state, params) {
        $state.go('app.biz.' + state, params);
    };
    vm.data11 = {
        chart: {type: 'bar', height: 200, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        credits: {enabled: false},
        title: {text: ''},
        subtitle: {text: 'As of Aug 18, 2015'},
        xAxis: {
            lineColor: 'black', categories: [
                'GrubHub',
                'Postmates',
                '<span style="color:red;font-weight:bold;">EAT24</span>',
                'Munchery',
                'BiteSquad',
                'UberEATS'
            ]
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td></tr>' +
            '<tr><td style="padding:0"><b>{point.y}</b></td></tr>'+
            '<tr><td style="padding:0"><button ng-click="vm.viewContent()">View Content</button></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        yAxis: {reversedStacks: false, visible: false, gridLineColor: 'transparent', min: 0, title: {text: ''}},
        legend: {reversed: false},
        plotOptions: {series: {stacking: 'normal'}},
        colors: ['#69788d'],
        series: [{
            showInLegend: false,
            name: 'Facebook',
            data: [19, 17, 16, 13, 12, 11]
        }]
    };
    vm.data12 = vm.data11;
    vm.data13 = vm.data11;
    vm.data14 = vm.data11;
    vm.data15 = {
        chart: {
            type: 'line', height: 300, backgroundColor: 'rgba(255, 255, 255, 0.8)'
        },
        title: {text: ''},
        subtitle: {text: 'Aug 18, 2015 vs. Jul 19, 2015'},
        xAxis: {
            categories: ['07/21', '07/24', '07/27', '07/30', '08/02', '08/05', '08/08', '08/11', '08/14', '08/14']
        },
        yAxis: {
            title: {
                text: 'Facebook Post Engagement Rate'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [
            {
                name: 'Audi USA',
                data: getRandomArray(12),
                dataLabels: false
            }, {
                name: 'Cadillac',
                data: getRandomArray(12),
                dataLabels: false
            }, {
                name: 'Chrysler',
                data: getRandomArray(12),
                dataLabels: false
            }, {
                name: 'Dodge',
                data: getRandomArray(12),
                dataLabels: false
            }, {
                name: 'Flat USA',
                data: getRandomArray(12),
                dataLabels: false
            }, {
                name: 'Honda',
                data: getRandomArray(12),
                dataLabels: false
            }, {
                name: 'Jeep',
                data: getRandomArray(12),
                dataLabels: false
            }, {
                name: 'Kia',
                data: getRandomArray(12),
                dataLabels: false
            }, {
                name: 'Mazda USA',
                data: getRandomArray(12),
                dataLabels: false
            }, {
                name: 'Mercedes-Benz',
                data: getRandomArray(12),
                dataLabels: false
            }, {
                name: 'Nissan USA',
                data: getRandomArray(12),
                dataLabels: false
            }, {
                name: 'Scion',
                data: getRandomArray(12),
                dataLabels: false
            }, {
                name: 'Subaru',
                data: getRandomArray(12),
                dataLabels: false
            }, {
                name: 'Tesla Motors',
                data: getRandomArray(12),
                dataLabels: false
            }, {
                name: 'Volkswagen USA',
                data: [0, 1, 2, 4, 2, 6, 2, 0, 1, 2, 3, 2],
                dataLabels: false
            }
        ]
    };
    vm.data16 = vm.data15;
    vm.data17 = vm.data13;
});

function getRandomArray(cnt) {
    var ary = [];
    for (var i = 0; i < cnt; i++) {
        ary[ary.length] = Math.random();
    }
    return ary;
};