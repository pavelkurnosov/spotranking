'use strict';

angular.module('app.biz').controller('TwitterLandscapeComparisonController', function () {
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
        colors: ['#65c1ee'],
        series: [{
            name: 'Twitter',
            data: [130, 100]
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
        colors: ['#65c1ee'],
        series: [{
            name: 'Twitter',
            data: [130, 100, 40, 23, 43, 10]
        }]
    };
});