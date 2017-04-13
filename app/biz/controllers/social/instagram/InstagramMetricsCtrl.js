'use strict';

angular.module('app.biz').controller('InstagramMetricsController', function ($state) {
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
        chart: {type: 'spline', height: 300, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        credits: {enabled: false},
        title: {text: ''},
        subtitle: {text: ''},
        xAxis: {step: 3, categories: ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm']},
        yAxis: {
            title: {text: ''}, labels: {
                formatter: function () {
                    return this.value + '';
                }
            }
        },
        tooltip: {crosshairs: true, shared: true},
        plotOptions: {spline: {marker: {radius: 4, lineColor: '#666666', lineWidth: 1}}},
        series: [{
            name: 'Landscape Activity',
            marker: {symbol: 'square'},
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0.05, 0.19, 0.38, 0.43, 0.43, 0.05, 0.05, 0.29, 0.67, 0.29, 0.38, 0.10, 0.05, 0.05, 0, 0]

        }, {
            name: 'Ooredoo Activity',
            marker: {symbol: 'diamond'},
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.43, 0, 0.14, 0, 0, 0.71, 0, 0, 0.43, 0.14, 0, 0, 0, 0]
        }]
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