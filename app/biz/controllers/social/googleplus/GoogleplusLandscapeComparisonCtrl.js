'use strict';

angular.module('app.biz').controller('GoogleplusLandscapeComparisonController', function () {
    var vm = this;
    vm.sdate = moment().subtract(7, 'd').format('YYYY-MM-DD');
    vm.edate = moment().format('YYYY-MM-DD');

    vm.data1 = {
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
        colors: ['#b03b2f'],
        series: [{
            name: 'Google+',
            data: [5, 8]
        }]
    };
    vm.data2 = {
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
        colors: ['#b03b2f'],
        series: [{
            name: 'Google+',
            data: [5, 8, 9, 5, 6, 4]
        }]
    };
    vm.data3 = {
        chart: {type: 'bar', height: 170, backgroundColor: 'rgba(255, 255, 255, 0.5)'},
        credits: {enabled: false},
        title: {text: ''},
        subtitle: {text: ''},
        xAxis: {
            lineColor: 'black', categories: [
                'Tesla Motors',
                'Landscape Average'
            ]
        },
        exporting: {enabled: false},
        yAxis: {reversedStacks: false, visible: false, gridLineColor: 'transparent', min: 0, title: {text: ''}},
        legend: {reversed: false},
        plotOptions: {series: {stacking: 'normal'}},
        colors: ['#67c0ec', '#2a5d78', '#b3e0f7'],
        series: [{
            name: 'Likes',
            data: [40, 12]
        },{
            name: 'Shares',
            data: [40, 12]
        },{
            name: 'Comment',
            data: [40, 12]
        }]
    };
    vm.data4 = {
        chart: {type: 'bar', height: 170, backgroundColor: 'rgba(255, 255, 255, 0.5)'},
        credits: {enabled: false},
        title: {text: ''},
        subtitle: {text: 'Engagement Total'},
        xAxis: {
            lineColor: 'black', categories: [
                'Tesla Motors',
                'Landscape Average'
            ]
        },
        exporting: {enabled: false},
        yAxis: {reversedStacks: false, visible: false, gridLineColor: 'transparent', min: 0, title: {text: ''}},
        legend: {reversed: false},
        plotOptions: {series: {stacking: 'normal'}},
        colors: ['#67c0ec', '#2a5d78'],
        series: [{
            name: 'Likes',
            data: [40, 12]
        },{
            name: 'Shares',
            data: [40, 12]
        }]
    };
});