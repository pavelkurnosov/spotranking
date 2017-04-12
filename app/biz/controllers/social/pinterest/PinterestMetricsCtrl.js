'use strict';

angular.module('app.biz').controller('PinterestMetricsController', function ($state) {
    var vm = this;
    vm.go = function (state, params) {
        $state.go('app.biz.' + state, params);
    };
    vm.data11 = {
        chart: {type: 'bar', height: 300, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        credits: {enabled: false},
        title: {text: ''},
        subtitle: {text: 'As of Aug 18, 2015'},
        xAxis: {
            lineColor: 'black', categories: [
                'Mercedes-Benz',
                'BMW',
                'Ferrari',
                'Nissan USA',
                'Lamborghini',
                'MINI USA',
                'Porsche(North America)',
                'Audi USA',
                'Mazda USA',
                'Hyundai USA',
                'Tesla Motors',
                'Fiat USA',
                'Chrysler',
                'Scion'
            ]
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td></tr>' +
            '<tr><td style="padding:0"><b>{point.y}</b></td></tr>'+
            '<tr><td style="padding:0"><button>View Content</button></td></tr>',
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
            name: 'Twitter',
            data: [19, 19, 16, 13, 12, 11, 10, 9, 1.9, 1.7, 1, 0.8, 0.851, 0.23]
        }]
    };
    vm.data12 = {
        chart: {type: 'bar', height: 300, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        credits: {enabled: false},
        title: {text: ''},
        subtitle: {text: 'Aug 18, 2015 vs. Jul 19, 2015'},
        xAxis: {
            lineColor: 'black', categories: [
                'Tesla Motors',
                'Nissan USA',
                'Chevrolet',
                'Toyota',
                'Honda',
                'Mercedes-Benz',
                'Mazda USA',
                'Chrysler',
                'Ford',
                'Cadillac',
                'Jeep',
                'Porsche(North America)',
                'Lamborghini',
                'Dodge'
            ]
        },
        yAxis: {reversedStacks: false, visible: false, gridLineColor: 'transparent', min: 0, title: {text: ''}},
        legend: {reversed: false},
        plotOptions: {series: {stacking: 'normal'}},
        colors: ['#69788d'],
        series: [{
            showInLegend: false,
            name: '',
            data: [5, 2.15, 1.32, 1.0, 0.96, 0.93, 0.82, 0.74, 0.65, 0.53, 0.51, 0.51, 0.5, 0.46]
        }]
    };
    vm.data13 = {
        chart: {type: 'bar', height: 300, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        credits: {enabled: false},
        title: {text: ''},
        subtitle: {text: 'Aug 18, 2015 vs. Jul 19, 2015'},
        xAxis: {
            lineColor: 'black', categories: [
                'Dodge',
                'Jeep',
                'Mercedes-Benz',
                'Fiat USA',
                'Ferrari',
                'BMW',
                'Tesla Motors',
                'Audi USA',
                'Scion',
                'Nissan USA',
                'Chrysler',
                'Lamborghini',
                'Honda',
                'Toyota',
            ]
        },
        yAxis: {reversedStacks: false, visible: false, gridLineColor: 'transparent', min: 0, title: {text: ''}},
        legend: {reversed: false},
        plotOptions: {series: {stacking: 'normal'}},
        colors: ['#69788d'],
        series: [{
            showInLegend: false,
            name: '',
            data: [2.97, 2.73, 2.63, 2.43, 2.07, 1.93, 1.87, 1.8, 1.57, 1.53, 1.47, 1.47, 1.33, 1.3]
        }]
    };
    vm.data14 = vm.data13;
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