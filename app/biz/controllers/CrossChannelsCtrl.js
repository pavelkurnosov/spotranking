'use strict';

angular.module('app.biz').controller('CrossChannelsController', function () {
    var vm = this;

    vm.data1 = {
        chart: {type: 'bar', height: 300, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        credits: {enabled: false},
        title: {text: 'Jun 5, 2015 - jun 11, 2015'},
        xAxis: {lineColor: 'black', categories: ['Prestashop', 'Volusion', 'Shopify', 'Bigcommerce', '3dcart', 'WooCommerce', 'Pinnacle Cart', 'X-Cart', 'UltraCart', 'Elastic Path', 'Magento', 'CubeCart']},
        yAxis: {visible: false, gridLineColor: 'transparent', min: 0, title: {text: ''}},
        legend: {reversed: false},
        plotOptions: {series: {stacking: 'normal'}},
        series: [{
            name: 'Twitter',
            data: [1, 3, 4, 7, 2, 3, 4, 7, 2, 3, 4, 7]
        }, {
            name: 'Facebook',
            data: [2, 2, 1, 2, 1, 2, 1, 2, 1, 1, 2, 2]
        }, {
            name: 'Google+',
            data: [3, 4, 4, 2, 2, 1, 1, 1, 2, 4, 1, 2]
        }, {
            name: 'YouTube',
            data: [4, 4, 4, 2, 5, 4, 4, 2, 5, 4, 4, 2]
        }, {
            name: 'Instagram',
            data: [14, 4, 4, 2, 5, 4, 4, 2, 5, 4, 4, 2]
        }]
    };
    vm.data2 = {
        chart: {type: 'bar', height: 300, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        credits: {enabled: false},
        title: {text: ''},
        xAxis: {lineColor: 'black', categories: ['Prestashop', 'Volusion', 'Shopify', 'WooCommerce', 'BigCommerce', '3dcart', 'CubeCart', 'UltraCart', 'Magento', 'Pinnacle Cart', 'X-Cart', 'Elastic Path']},
        yAxis: {visible: false, gridLineColor: 'transparent', min: 0, title: {text: ''}},
        legend: {reversed: false},
        plotOptions: {series: {stacking: 'normal'}},
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
        series: [{
            showInLegend: false,
            name: '',
            data: [1, 3, 4, 7, 2, 3, 4, 7, 2]
        }]
    };
    vm.data4 = {
        chart: {type: 'bar', height: 300, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        credits: {enabled: false},
        title: {text: ''},
        xAxis: {lineColor: 'black', categories: ['Bentley Motors', 'BMW', 'Porsche(North America)', 'Mercedes-Benz', 'Tesla Motors', 'Toyota', 'Audi USA', 'Lamborghini', 'Ford']},
        yAxis: {visible: false, gridLineColor: 'transparent', min: 0, title: {text: ''}},
        legend: {reversed: false},
        plotOptions: {series: {stacking: 'normal'}},
        series: [{
            name: 'Twitter',
            data: [1, 3, 4, 7, 2, 3, 4, 7, 2]
        }, {
            name: 'Facebook',
            data: [2, 2, 1, 2, 1, 2, 1, 2, 1]
        }, {
            name: 'Google+',
            data: [3, 4, 4, 2, 2, 1, 1, 1, 2]
        }, {
            name: 'YouTube',
            data: [4, 4, 4, 2, 5, 4, 4, 2, 5]
        }, {
            name: 'Instagram',
            data: [14, 4, 4, 2, 5, 4, 4, 2, 5]
        }]
    };
    vm.data5 = {
        chart: {type: 'bar', height: 300, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        credits: {enabled: false},
        title: {text: ''},
        xAxis: {lineColor: 'black', categories: [
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
        ]},
        yAxis: {visible: false, gridLineColor: 'transparent', min: 0, title: {text: ''}},
        legend: {reversed: false},
        plotOptions: {series: {stacking: 'normal'}},
        series: [{
            showInLegend: false,
            name: '',
            data: [2481, 1786, 1436, 1232, 1085, 798, 733, 631, 609, 187, 162, 1]
        }]
    };
});