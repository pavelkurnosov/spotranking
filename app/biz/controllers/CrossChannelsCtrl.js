'use strict';

angular.module('app.biz').controller('CrossChannelsController', function () {
    var vm = this;
    vm.data1 = {
        chart: {type: 'bar', height: 150, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
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

    /*vm.data1 = {
        chart: {type: 'bar', height: 300, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        credits: {enabled: false},
        title: {text: 'Jun 5, 2015 - jun 11, 2015'},
        xAxis: {lineColor: 'black', categories: ['Prestashop', 'Volusion', 'Shopify', 'Bigcommerce', '3dcart', '<span style="color:black;font-weight: bold;">WooCommerce</span>', 'Pinnacle Cart', 'X-Cart', 'UltraCart', 'Elastic Path', 'Magento', 'CubeCart']},
        yAxis: {reversedStacks: false, visible: false, gridLineColor: 'transparent', min: 0, title: {text: ''}},
        legend: {reversed: false},
        plotOptions: {series: {stacking: 'normal'}},
        colors: ['#65c1ee', '#294a83', '#b03b2f', '#eb4349', '#4d7ea3'],
        series: [{
            name: 'Twitter',
            data: [130, 100, 52, 35, 26, 18, 10, 8, 4, 3, 3, 1]
        }, {
            name: 'Facebook',
            data: [40, 12, 8, 6, 9, 2, 1, 2, 1, 1, 2, 2]
        }, {
            name: 'Google+',
            data: [5, 8, 9, 5, 3, 1, 1, 1, 2, 4, 1, 2]
        }, {
            name: 'YouTube',
            data: [7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
        }, {
            name: 'Instagram',
            data: [20, 10, 6, 7, 5, 4, 4, 2, 5, 4, 4, 2]
        }]
    };
    vm.data2 = {
        chart: {type: 'bar', height: 300, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        credits: {enabled: false},
        title: {text: ''},
        xAxis: {lineColor: 'black', categories: ['Prestashop', 'Volusion', 'Shopify', 'WooCommerce', '<span style="color:black;font-weight: bold;">BigCommerce</span>', '3dcart', 'CubeCart', 'UltraCart', 'Magento', 'Pinnacle Cart', 'X-Cart', 'Elastic Path']},
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
        xAxis: {lineColor: 'black', categories: ['Bentley Motors', 'BMW', 'Porsche(North America)', 'Mercedes-Benz', '<span style="color:black;font-weight: bold;">Tesla Motors</span>', 'Toyota', 'Audi USA', 'Lamborghini', 'Ford']},
        yAxis: {visible: false, gridLineColor: 'transparent', min: 0, title: {text: ''}},
        legend: {reversed: false},
        plotOptions: {series: {stacking: 'normal'}},
        colors: ['#6c788e'],
        series: [{
            showInLegend: false,
            name: '',
            data: [3.89, 2.48, 2.32, 2.22, {y:2.03, color: '#5fc2f7'}, 1.95, 1.85, 1.78, 1.75]
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
                '<span style="color:black;font-weight: bold;">Shopify</span>',
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
            data: [2481, 1786, 1436, 1232, 1085, 798, {y:733,color: '#5fc2f7'}, 631, 609, 187, 162, 1]
        }]
    };*/
});