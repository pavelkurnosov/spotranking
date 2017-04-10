'use strict';

angular.module('app.biz').controller('CrossChannelsController', function ($state, $filter, SocialPages) {
    var vm = this;
    vm.socialPages = SocialPages;
    vm.go = function (state) {
        $state.go('app.biz.' + state);
    };

    vm.tabs = [
        {title: 'Social Posts', state: 'crossChannels.socialPosts', active: true},
        {title: 'Metrics', state: 'crossChannels.metrics'},
        {title: 'Landscape Comparison', state: 'crossChannels.landscapeComparison'},
        {title: 'Bios', state: 'crossChannels.bios'},
        {title: 'My Rankings', state: 'crossChannels.myRankings'}
    ];

    vm.selectTab = function (tab) {
        $filter('filter')(vm.tabs, {active:true}, true)[0]['active'] = false;
        tab.active = true;
        vm.go(tab.state);
    };
    vm.selectTab($filter('filter')(vm.tabs, {active:true}, true)[0]);


/*
    vm.gridColumns = [
        {
            id: 1, title: 'ENGAGEMENT TOTAL', acronym: 'Eng.Total', visible: true, columns: [
            {id: 11, title: 'APPLAUSE', acronym: 'Applause'},
            {id: 12, title: 'CONVERSATION', acronym: 'Conversation'},
            {id: 13, title: 'AMPLIFICATION', acronym: 'Amplification'}
        ]
        },
        {id: 2, title: 'AUDIENCE', acronym: 'Audience'},
        {id: 3, title: 'ENGAGEMENT RATE', acronym: 'Eng.Rate', visible: true},
        {id: 4, title: 'POST TYPE', acronym: 'Post Type'},
        {id: 5, title: 'PRESENCE HANDLE', acronym: 'Presence Handle'}
    ];
    vm.columnsForGrid = [];
    for (var col in vm.gridColumns) {
        vm.columnsForGrid[vm.columnsForGrid.length] = vm.gridColumns[col];
        if (typeof vm.gridColumns[col].columns == 'object') {
            for (var c in vm.gridColumns[col].columns) {
                vm.columnsForGrid[vm.columnsForGrid.length] = vm.gridColumns[col].columns[c];
            }
        }
    }




    vm.sdate = moment().subtract(7, 'd').format('YYYY-MM-DD');
    vm.edate = moment().format('YYYY-MM-DD');


    vm.chart1 = {
        chart: {type: 'bar', height: 170, backgroundColor: 'rgba(255, 255, 255, 0.5)'},
        credits: {enabled: false},
        title: {text: ''},
        subtitle: {text: 'Social Audience'},
        xAxis: {
            lineColor: 'black', categories: [
                'Ooredoo',
                'Landscape Average'
            ]
        },
        exporting: {enabled: false},
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
        subtitle: {text: 'Who has the top 50 posts?'},
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
        credits: {enabled: false},
        title: {
            text: ''
        },
        subtitle: {
            text: 'What type of posts were they?'
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
    vm.data55 = {
        chart: {
            type: 'pie', height: 235, backgroundColor: 'rgba(255, 255, 255, 0.5)'
        },
        credits: {enabled: false},
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        tooltip: {},
        series: [{
            name: 'Brands',
            data: [{
                name: 'Facebook',
                y: 90
            }, {
                name: 'Twitter',
                y: 10
            }]
        }]
    };
    vm.data56 = {
        chart: {
            type: 'pie', height: 235, backgroundColor: 'rgba(255, 255, 255, 0.5)'
        },
        credits: {enabled: false},
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        tooltip: {},
        series: [{
            name: 'Brands',
            data: [{
                name: 'Photo',
                y: 90
            }, {
                name: 'Link',
                y: 10
            }]
        }]
    };
    vm.data6 = {
        chart: {type: 'column', height: 200, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        credits: {enabled: false},
        title: {text: ''},
        subtitle: {text: 'When were they posted?'},
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
        chart: {type: 'line', height: 300, backgroundColor: 'rgba(255, 255, 255, 0.5)'},
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: ''
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
        series: [{
            name: 'Tokyo',
            data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'London',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
    };*/
});