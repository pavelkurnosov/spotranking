'use strict';

angular.module('app.biz').controller('MarketingActivityController', function ($scope) {
    var vm = this;

    vm.items = [
        ['Offline Media', 'Disable'],
        ['All', 'Newspapers', 'Magazine', 'TV', 'Radio', 'OOH'],
        ['Online Media', 'Disable'],
        ['All', 'Display', 'Organic Search', 'Paid Search', 'Social Ad', 'Referral', 'Email', 'Other'],
        ['Offline Media', 'Disable'],
        ['All', 'Retail in Store', 'Brochure', 'Flyers', 'Company PR'],
        ['Online Media', 'Disable'],
        ['Social Accounts', 'Disable'],
        ['Ofline Media', 'Disable'],
        ['Mentions', 'WOM Conversations'],
        ['Online Media', 'Disable'],
        ['Social Engagement', 'Online Rating', 'Online WOM Referral']
    ];
    vm.currItems = [];
    angular.forEach(vm.items, function (val, key) {
        var ind = 0;
        if (key == 1) {
            ind = 1;
        } else if (key == 3) {
            ind = 4;
        } else if (key == 5) {
            ind = 4;
        } else if (key == 7) {
            ind = 0;
        } else if (key == 9) {
            ind = 0;
        } else if (key == 11) {
            ind = 0;
        }
        vm.currItems[vm.currItems.length] = val[ind];
    });


    vm.getRandomData = function () {
        var ary = [];
        for (var i = 0; i < 30; i++) {
            ary[ary.length] = Math.ceil(Math.random() * 100);
        }
        return ary;
    };

    vm.data = {
        chart: {zoomType: 'xy'},
        credits: {enabled: false},
        title: {text: ''},
        subtitle: {text: ''},
        xAxis: [{
            categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '',
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            },
            title: {
                text: '-',
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            },
            opposite: true

        }, { // Secondary yAxis
            gridLineWidth: 0,
            title: {
                text: '-',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value} ',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            }

        }, { // Tertiary yAxis
            gridLineWidth: 0,
            title: {
                text: '-',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 80,
            verticalAlign: 'top',
            y: 55,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        series: [{
            name: 'Sessions',
            type: 'column',
            yAxis: 1,
            data: vm.getRandomData(),
            tooltip: {
                valueSuffix: ' '
            }

        }, {
            name: 'Audience',
            type: 'spline',
            yAxis: 2,
            data: vm.getRandomData(),
            marker: {
                enabled: false
            },
            dashStyle: 'shortdot',
            tooltip: {
                valueSuffix: ' '
            }

        }, {
            name: 'Total Posting',
            type: 'spline',
            yAxis: 2,
            data: vm.getRandomData(),
            marker: {
                enabled: false
            },
            dashStyle: 'shortdot',
            tooltip: {
                valueSuffix: ' '
            }

        }, {
            name: 'High Engagment',
            type: 'spline',
            data: vm.getRandomData(),
            tooltip: {
                valueSuffix: ' '
            }
        }, {
            name: 'Timing',
            type: 'spline',
            yAxis: 2,
            data: vm.getRandomData(),
            marker: {
                enabled: false
            },
            dashStyle: 'shortdot',
            tooltip: {
                valueSuffix: ' '
            }
        }]
    };


});