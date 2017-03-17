'use strict';

angular.module('app.biz').controller('FacebookController', function () {
    var vm = this;

    vm.data1 = {
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
    vm.data2 = {
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
    vm.data3 = {
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
    vm.data4 = vm.data3;
    vm.data5 = {
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
    vm.data6 = vm.data5;
    vm.data7 = vm.data3;
    vm.data8 = vm.data1;
    vm.data9 = {
        chart: {
            type: 'scatter',
            zoomType: 'xy', height: 300, backgroundColor: 'rgba(255, 255, 255, 0.8)'
        },
        credits: {enabled: false},
        title: {
            text: ''
        },
        subtitle: {
            text: 'Jul 20, 2015 - Aug 18, 2015'
        },
        xAxis: {
            title: {
                enabled: true,
                text: ''
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Facebook Average<br/>Engagement Total per Post'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 100,
            y: 70,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
            borderWidth: 1
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    // pointFormat: '{point.x} cm, {point.y} kg'
                }
            }
        },
        series: [{
            name: 'Lamborghini',
            color: 'rgba(223, 83, 83, .5)',
            data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
                [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
                [172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0],
                [147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8],
                [159.5, 50.6], [175.0, 82.5], [166.8, 57.2], [176.5, 87.8], [170.2, 72.8],
                [174.0, 54.5], [173.0, 59.8], [179.9, 67.3], [170.5, 67.8], [160.0, 47.0],
                [156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6],
                [169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8],
                [176.5, 71.8], [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3]]

        }, {
            name: 'Fiat USA',
            color: 'rgba(119, 152, 191, .5)',
            data: [[174.0, 65.6], [175.3, 71.8], [193.5, 80.7], [186.5, 72.6], [187.2, 78.8],
                [181.5, 74.8], [184.0, 86.4], [184.5, 78.4], [175.0, 62.0], [184.0, 81.6],
                [193.0, 95.9], [171.4, 91.4], [177.8, 81.8], [177.8, 96.8], [167.6, 69.1],
                [167.6, 82.7], [180.3, 75.5], [182.9, 79.5], [176.5, 73.6], [186.7, 91.8],
                [188.0, 84.1], [188.0, 85.9], [177.8, 81.8], [174.0, 82.5], [177.8, 80.5],
                [170.2, 62.3], [177.8, 82.7], [179.1, 79.1], [190.5, 98.2], [177.8, 84.1],
                [180.3, 83.2], [180.3, 83.2]]
        }]
    };
});

function getRandomArray(cnt) {
    var ary = [];
    for (var i = 0; i < cnt; i++) {
        ary[ary.length] = Math.random();
    }
    return ary;
};