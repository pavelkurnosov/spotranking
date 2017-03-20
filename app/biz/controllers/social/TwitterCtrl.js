'use strict';

angular.module('app.biz').controller('TwitterController', function ($state) {
    var vm = this;

    vm.socialPages = [
        {id: 1, title: 'Cross-Channel', url: 'crossChannels'},
        {id: 2, title: 'Twitter', url: 'socialTwitter'},
        {id: 3, title: 'Facebook', url: 'socialFacebook'},
        {id: 4, title: 'LinkedIn', url: 'socialLinkedin'},
        {id: 5, title: 'Google+', url: 'socialGoogleplus'},
        {id: 6, title: 'YouTube', url: 'socialYoutube'},
        {id: 7, title: 'Instagram', url: 'socialInstagram'}
    ];
    vm.openPage = function (url) {
        $state.go('app.biz.' + url);
    };

    vm.data1 = {
        chart: {type: 'bar', height: 170, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        credits: {enabled: false},
        title: {text: ''},
        subtitle: {text: 'As of Aug 18, 2015'},
        xAxis: {
            lineColor: 'black', categories: [
                'Social Audience',
                'Eat24'
            ]
        },
        yAxis: {reversedStacks: false, visible: false, gridLineColor: 'transparent', min: 0, title: {text: ''}},
        legend: {reversed: false},
        plotOptions: {series: {stacking: 'normal'}},
        colors: ['#65c1ee', '#294a83', '#b03b2f', '#eb4349', '#4d7ea3'],
        series: [{
            name: 'Twitter',
            data: [130, 100]
        }, {
            name: 'Facebook',
            data: [40, 12]
        }, {
            name: 'Google+',
            data: [5, 8]
        }, {
            name: 'YouTube',
            data: [7, 0]
        }, {
            name: 'Instagram',
            data: [20, 10]
        }]
    };
    vm.data2 = vm.data1;
    vm.data3 = {
        chart: {type: 'bar', height: 300, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        credits: {enabled: false},
        title: {text: ''},
        subtitle: {text: 'As of Aug 18, 2015'},
        xAxis: {
            lineColor: 'black', categories: [
                'GrubHub',
                'Postmates',
                '<span style="color: black; font-weight: bold;">Eat24</span>',
                'Munchery',
                'BiteSquad',
                'UberEATS'
            ]
        },
        yAxis: {reversedStacks: false, visible: false, gridLineColor: 'transparent', min: 0, title: {text: ''}},
        legend: {reversed: false},
        plotOptions: {series: {stacking: 'normal'}},
        colors: ['#65c1ee', '#294a83', '#b03b2f', '#eb4349', '#4d7ea3'],
        series: [{
            name: 'Twitter',
            data: [130, 100, 40, 23, 43, 10]
        }, {
            name: 'Facebook',
            data: [40, 12, 20, 3, 45, 2]
        }, {
            name: 'Google+',
            data: [5, 8, 9, 5, 6, 4]
        }, {
            name: 'YouTube',
            data: [7, 0, 3, 4, 5, 6]
        }, {
            name: 'Instagram',
            data: [20, 10, 9, 8, 7, 7]
        }]
    };
    vm.data4 = {
        chart: {type: 'bar', height: 200, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        credits: {enabled: false},
        title: {text: ''},
        subtitle: {text: 'Who has the top 50 Tweets?'},
        xAxis: {
            lineColor: 'black',
            categories: ['Porsche(North America)', 'Mazda USA', 'Mitsubishi Motors', 'Mercedes-Benz', 'Kia']
        },
        yAxis: {reversedStacks: false, visible: false, gridLineColor: 'transparent', min: 0, title: {text: ''}},
        legend: {reversed: false},
        plotOptions: {series: {stacking: 'normal'}},
        colors: ['#6b7889'],
        series: [{
            showInLegend: false,
            name: '',
            data: [7, 6, 6, 4, 4]
        }]
    };
    vm.data5 = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie', height: 200, backgroundColor: 'rgba(255, 255, 255, 0.8)'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: 'What type of Tweets were they?'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Video',
                y: 100
            }]
        }]
    };
    vm.data6 = {
        chart: {type: 'column', height: 200, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        credits: {enabled: false},
        title: {text: ''},
        subtitle: {text: 'When were they Tweeted?'},
        xAxis: {
            lineColor: 'black',
            categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        },
        yAxis: {reversedStacks: false, visible: false, gridLineColor: 'transparent', min: 0, title: {text: ''}},
        legend: {reversed: false},
        colors: ['#6b7889'],
        series: [{
            showInLegend: false,
            name: '',
            data: [1, 6, 7, 10, 18, 8, 0]
        }]
    };
    vm.data7 = {
        chart: {type: 'line', height: 170},
        title: {text: ''},
        subtitle: {text: ''},
        xAxis: {type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
                month: '%e. %b',
                year: '%b'
            },
            title: {
                text: 'Date'
            }},
        yAxis: {title: {text: ''}},
        legend: {layout: 'vertical', align: 'right', verticalAlign: 'middle'},
        plotOptions: {series: {stacking: 'normal'}},
        series: [{
            name: 'Eat24',
            // Define the data points. All series have a dummy year
            // of 1970/71 in order to be compared on the same x axis. Note
            // that in JavaScript, months start at 0 for January, 1 for February etc.
            data: [
                [Date.UTC(2016, 6, 1), 190],
                [Date.UTC(2016, 6, 4), 130],
                [Date.UTC(2016, 6, 7), 115],
                [Date.UTC(2016, 6, 10), 155],
                [Date.UTC(2016, 6, 13), 230],
                [Date.UTC(2016, 6, 16), 145],
                [Date.UTC(2016, 6, 19), 143],
                [Date.UTC(2016, 6, 22), 148],
                [Date.UTC(2016, 6, 25), 150],
                [Date.UTC(2016, 6, 28), 170]
            ]
        }]
    };
});