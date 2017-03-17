'use strict';

angular.module('app.biz').controller('CrossChannelsController', function () {
    var vm = this;

    vm.data1 = {
        chart: {type: 'bar', height: 300, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        credits: {enabled: false},
        title: {text: 'Jun 5, 2015 - jun 11, 2015'},
        xAxis: {lineColor: 'black', categories: ['Prestashop', 'Volusion', 'Shopify', 'Bigcommerce', '3dcart', 'WooCommerce', 'Pinnacle Cart', 'X-Cart', 'UltraCart', 'Elastic Path', 'Magento', 'CubeCart']},
        yAxis: {reversedStacks: false, visible: false, gridLineColor: 'transparent', min: 0, title: {text: ''}},
        legend: {reversed: false},
        plotOptions: {series: {stacking: 'normal'}},
        colors: ['#65c1ee', '#294a83', '#b03b2f', '#eb4349', '#4d7ea3'],
        series: [{
            name: 'Twitter',
            data: [11, 3, 4, 7, 2, 3, 4, 7, 2, 3, 4, 7]
        }, {
            name: 'Facebook',
            data: [2, 2, 1, 2, 1, 2, 1, 2, 1, 1, 2, 2]
        }, {
            name: 'Google+',
            data: [3, 4, 4, 2, 2, 1, 1, 1, 2, 4, 1, 2]
        }, {
            name: 'YouTube',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
        }, {
            name: 'Instagram',
            data: [3, 4, 4, 2, 5, 4, 4, 2, 5, 4, 4, 2]
        }]
    };
    vm.data2 = {
        chart: {type: 'bar', height: 300, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        credits: {enabled: false},
        title: {text: ''},
        xAxis: {lineColor: 'black', categories: ['Prestashop', 'Volusion', 'Shopify', 'WooCommerce', 'BigCommerce', '3dcart', 'CubeCart', 'UltraCart', 'Magento', 'Pinnacle Cart', 'X-Cart', 'Elastic Path']},
        yAxis: {reversedStacks: false, visible: false, gridLineColor: 'transparent', min: 0, title: {text: ''}},
        legend: {reversed: false},
        plotOptions: {series: {stacking: 'normal'}},
        colors: ['#5fc2f7', '#285c7b', '#b1e0f8'],
        series: [{
            name: 'Twitter',
            data: [1, 3, 4, 7, 2, 3, 4, 7, 2, 3, 4, 7]
        }, {
            name: 'Retweets',
            data: [2, 2, 1, 2, 1, 2, 1, 2, 1, 1, 2, 2]
        }, {
            name: 'Replies',
            data: [3, 4, 4, 2, 2, 1, 1, 1, 2, 4, 1, 2]
        }]
    };
    vm.data3 = {
        chart: {type: 'bar', height: 300, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        credits: {enabled: false},
        title: {text: ''},
        xAxis: {lineColor: 'black', categories: ['Bentley Motors', 'BMW', 'Porsche(North America)', 'Mercedes-Benz', 'Tesla Motors', 'Toyota', 'Audi USA', 'Lamborghini', 'Ford']},
        yAxis: {visible: false, gridLineColor: 'transparent', min: 0, title: {text: ''}},
        legend: {reversed: false},
        plotOptions: {series: {stacking: 'normal'}},
        colors: ['#6c788e'],
        series: [{
            showInLegend: false,
            name: '',
            data: [1, 3, 4, 7, 2, 3, 4, 7, 2]
        }]
    };
    vm.data4 = {
        chart: {type: 'line', height: 300, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        title: {text: ''},
        subtitle: {text: 'Average Engagement Rate by Published Hour(PDT)'},
        xAxis: {categories: ['12am', '4am', '8am', '12pm', '4pm', '8pm', '12am']},
        yAxis: {title: {text: ''}},
        plotOptions: {line: {dataLabels: {enabled: true}, enableMouseTracking: true}},
        series: [{
            name: 'Tesla Motors',
            data: [0.1, 0.2, 0.1, 0.55, 0.81, 0.2, 0.1]
        }, {
            name: 'Landscape',
            data: [0.2, 0.31, 0.14, 0.4, 0.63, 0.47, 0.2]
        }]
    };
    vm.data5 = {
        chart: {type: 'bar', height: 300, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        credits: {enabled: false},
        title: {text: ''},
        xAxis: {
            lineColor: 'black', categories: [
                'WooCommerce',
                '3dcart',
                'Elastic Path',
                'X-Cart',
                'Presta Shop',
                'Volusion',
                'Shopify',
                'UltraCart',
                'Pinnacle Cart',
                'Magento',
                'Bigcommerce',
                'CubeCart'
            ]
        },
        yAxis: {visible: false, gridLineColor: 'transparent', min: 0, title: {text: ''}},
        legend: {reversed: false},
        plotOptions: {series: {stacking: 'normal'}},
        colors: ['#6c788e'],
        series: [{
            showInLegend: false,
            name: '',
            data: [2481, 1786, 1436, 1232, 1085, 798, 733, 631, 609, 187, 162, 1]
        }]
    };
});