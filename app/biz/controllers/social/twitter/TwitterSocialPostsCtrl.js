'use strict';

angular.module('app.biz').controller('TwitterSocialPostsController', function ($state, Timezones) {
    var vm = this;
    vm.timezones = Timezones;
    vm.gridColumns = [
        {
            id: 1, title: 'ENGAGEMENT TOTAL', acronym: 'Eng.Total', visible: true,
            columns: [
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

    vm.couldData = [
        {text: "#Djezzy", weight: 30, link: "https://google.com"},
        {text: "#djezzymodem", weight: 20, link: "https://google.com"},
        {text: "#algerie", weight: 6, link: "https://google.com"},
        {text: "#game", weight: 7, link: "https://google.com"},
        {text: "#votre", weight: 5, link: "https://google.com"},
        {text: "#djezzy718", weight: 18, link: "https://google.com"},
        {text: "#4millionsfans", weight: 3, link: "https://google.com"},
        {text: "#djezzy", weight: 17, link: "https://google.com"},
        {text: "#franchi", weight: 24, link: "https://google.com"},
        {text: "#trouver", weight: 26, link: "https://google.com"}
    ];

    vm.sdate = moment().subtract(7, 'd').format('YYYY-MM-DD');
    vm.edate = moment().format('YYYY-MM-DD');

    vm.socialMedias = [
        {id: 1, title: 'Instagram', icon: 'instagram'},
        {id: 2, title: 'Google+', icon: 'google-plus'},
        {id: 3, title: 'Facebook', icon: 'facebook'},
        {id: 4, title: 'Twitter', icon: 'twitter'},
        {id: 5, title: 'Youtube', icon: 'youtube'},
        {id: 6, title: 'Pinterest', icon: 'pinterest'}
    ];
    vm.data1 = {
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
    vm.data2 = {
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
    vm.data3 = {
        chart: {type: 'spline'},
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
    vm.data4 = {
        chart: {type: 'spline'},
        credits: {enabled: false},
        title: {text: ''},
        subtitle: {text: ''},
        xAxis: {categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']},
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
            data: [2.67, 3, 4.67, 3.67, 4.67, 2.33, 0]

        }, {
            name: 'Ooredoo Activity',
            marker: {symbol: 'diamond'},
            data: [1.5, 1, 2, 2, 3, 2, 0]
        }]
    };
    vm.data5 = {
        chart: {type: 'spline'},
        credits: {enabled: false},
        title: {text: ''},
        subtitle: {text: ''},
        xAxis: {categories: ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm']},
        yAxis: {
            title: {text: ''}, labels: {
                formatter: function () {
                    return this.value + '%';
                }
            }
        },
        tooltip: {crosshairs: true, shared: true},
        plotOptions: {spline: {marker: {radius: 4, lineColor: '#666666', lineWidth: 1}}},
        series: [{
            name: 'Landscape Activity',
            marker: {symbol: 'square'},
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0.004, 0.036, 0.053, 0.035, 0, 0.015, 0.031, 0.026, 0.058, 0.038, 0.21, 0.002, 0.008, 0, 0, 0]

        }, {
            name: 'Ooredoo Activity',
            marker: {symbol: 'diamond'},
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.022, 0, 0.32, 0, 0, 0.34, 0, 0, 0.045, 0.37, 0, 0, 0, 0]
        }]
    };
    vm.data6 = {
        chart: {type: 'spline'},
        credits: {enabled: false},
        title: {text: ''},
        subtitle: {text: ''},
        xAxis: {categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']},
        yAxis: {
            title: {text: ''}, labels: {
                formatter: function () {
                    return this.value + '%';
                }
            }
        },
        tooltip: {crosshairs: true, shared: true},
        plotOptions: {spline: {marker: {radius: 4, lineColor: '#666666', lineWidth: 1}}},
        series: [{
            name: 'Landscape Activity',
            marker: {symbol: 'square'},
            data: [0.030,0.026,0.040,0.048,0.092,0.033,0]

        }, {
            name: 'Ooredoo Activity',
            marker: {symbol: 'diamond'},
            data: [0.035,0.003,0.048,0.051,0.14,0.020,0]
        }]
    };

    vm.go = function (state) {
        $state.go('app.biz.' + state);
    };
});