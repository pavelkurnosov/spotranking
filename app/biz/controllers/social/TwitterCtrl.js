'use strict';

angular.module('app.biz').controller('TwitterController', function () {
    var vm = this;
    vm.data1 = {
        chart: {type: 'bar', height: 140, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        credits: {enabled: false},
        title: {text: ''},
        subtitle: {text: 'Followers'},
        xAxis: {lineColor: 'black', categories: ['Tesla Motors', 'Landscape Average']},
        yAxis: {reversedStacks: false, visible: false, gridLineColor: 'transparent', min: 0, title: {text: ''}},
        legend: {reversed: false},
        plotOptions: {series: {stacking: 'normal'}},
        colors: ['#61c2f6'],
        series: [{
            showInLegend: false,
            name: 'Twitter',
            data: [705, 586]
        }]
    };
    vm.data2 = {
        chart: {type: 'bar', height: 140, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        credits: {enabled: false},
        title: {text: ''},
        subtitle: {text: 'All Tweets'},
        xAxis: {lineColor: 'black', categories: ['Tesla Motors', 'Landscape Average']},
        yAxis: {reversedStacks: false, visible: false, gridLineColor: 'transparent', min: 0, title: {text: ''}},
        legend: {reversed: false},
        plotOptions: {series: {stacking: 'normal'}},
        colors: ['#61c2f6'],
        series: [{
            showInLegend: false,
            name: 'Twitter',
            data: [705, 586]
        }]
    };
    vm.data3 = {
        chart: {type: 'bar', height: 140, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        credits: {enabled: false},
        title: {text: ''},
        subtitle: {text: 'Engagement Total'},
        xAxis: {lineColor: 'black', categories: ['Tesla Motors', 'Landscape Average']},
        yAxis: {reversedStacks: false, visible: false, gridLineColor: 'transparent', min: 0, title: {text: ''}},
        legend: {reversed: false},
        plotOptions: {series: {stacking: 'normal'}},
        colors: ['#61c2f6'],
        series: [{
            showInLegend: false,
            name: 'Twitter',
            data: [705, 586]
        }]
    };
    vm.data4 = {
        chart: {type: 'bar', height: 300, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        credits: {enabled: false},
        title: {text: ''},
        subtitle: {text: 'Jun 5, 2015 - jun 11, 2015'},
        xAxis: {lineColor: 'black', categories: ['Prestashop', 'Volusion', 'Shopify', 'Bigcommerce', '3dcart', '<span style="color:black;font-weight: bold;">WooCommerce</span>', 'Pinnacle Cart', 'X-Cart', 'UltraCart', 'Elastic Path', 'Magento', 'CubeCart']},
        yAxis: {reversedStacks: false, visible: false, gridLineColor: 'transparent', min: 0, title: {text: ''}},
        legend: {reversed: false},
        plotOptions: {series: {stacking: 'normal'}},
        colors: ['#65c1ee', '#294a83'],
        series: [{
            name: 'Retweets',
            data: [130, 100, 52, 35, 26, 18, 10, 8, 4, 3, 3, 1]
        }, {
            name: 'Favorites',
            data: [40, 12, 8, 6, 9, 2, 1, 2, 1, 1, 2, 2]
        }]
    };
    vm.data5 = {
        chart: {type: 'bar', height: 300, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        credits: {enabled: false},
        title: {text: ''},
        subtitle: {text: 'Jun 5, 2015 - jun 11, 2015'},
        xAxis: {lineColor: 'black', categories: ['Prestashop', 'Volusion', 'Shopify', 'Bigcommerce', '3dcart', '<span style="color:black;font-weight: bold;">WooCommerce</span>', 'Pinnacle Cart', 'X-Cart', 'UltraCart', 'Elastic Path', 'Magento', 'CubeCart']},
        yAxis: {reversedStacks: false, visible: false, gridLineColor: 'transparent', min: 0, title: {text: ''}},
        legend: {reversed: false},
        plotOptions: {series: {stacking: 'normal'}},
        colors: ['#294a83'],
        series: [{
            showInLegend: false,
            name: 'Retweets',
            data: [130, 100, 52, 35, 26, 18, 10, 8, 4, 3, 3, 1]
        }]
    };
    vm.data6 = {
        chart: {type: 'bar', height: 300, backgroundColor: 'rgba(255, 255, 255, 0.8)'},
        credits: {enabled: false},
        title: {text: ''},
        subtitle: {text: 'Jun 5, 2015 - jun 11, 2015'},
        xAxis: {lineColor: 'black', categories: ['Prestashop', 'Volusion', 'Shopify', 'Bigcommerce', '3dcart', '<span style="color:black;font-weight: bold;">WooCommerce</span>', 'Pinnacle Cart', 'X-Cart', 'UltraCart', 'Elastic Path', 'Magento', 'CubeCart']},
        yAxis: {reversedStacks: false, visible: false, gridLineColor: 'transparent', min: 0, title: {text: ''}},
        legend: {reversed: false},
        plotOptions: {series: {stacking: 'normal'}},
        colors: ['#65c1ee', '#294a83'],
        series: [{
            name: 'Tweets',
            data: [130, 100, 52, 35, 26, 18, 10, 8, 4, 3, 3, 1]
        }, {
            name: 'Retweets',
            data: [40, 12, 8, 6, 9, 2, 1, 2, 1, 1, 2, 2]
        }, {
            name: 'Replies',
            data: [20, 7, 6, 5, 1, 2, 1, 2, 1, 1, 2, 2]
        }]
    };
});
