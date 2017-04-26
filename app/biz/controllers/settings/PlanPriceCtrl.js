'use strict';

angular.module('app.biz').controller('PlanPriceController', function ($state) {
    var vm = this;
    vm.plan_type = 0;
    vm.prices = [{
        monitoring_input: [12, 14, 16],
        content_detection: [12, 14, 16],
        digital_media: [11.4, 12.6, 15.9],
        monitoring_ooh: [5, 7, 10],
        measuring_output: [10.5, 14, 15],
        other_service: [12, 14, 16]
    }, {
        monitoring_input: [121, 142, 136],
        content_detection: [112, 124, 163],
        digital_media: [111.4, 122.6, 135.9],
        monitoring_ooh: [51, 72, 103],
        measuring_output: [110.5, 124, 135],
        other_service: [121, 142, 163]
    }];
});