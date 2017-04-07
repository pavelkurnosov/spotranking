'use strict';

angular.module('app.biz').controller('CrossChannelsSocialPostsController', function ($state, Timezones) {
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

    vm.sdate = moment().subtract(7, 'd').format('YYYY-MM-DD');
    vm.edate = moment().format('YYYY-MM-DD');


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
    };

    vm.go = function (state) {
        $state.go('app.biz.' + state);
    };
});