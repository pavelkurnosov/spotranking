'use strict';

angular.module('app.biz').controller('PlanPriceController', function ($state) {
    var vm = this;
    vm.plan_type = 0;
    vm.prices = [{
        monitoring_input: [12, 14],
        content_detection: [12, 14],
        digital_media: [11.4, 12.6],
        monitoring_ooh: [5, 7],
        measuring_output: [10.5, 14],
        other_service: [12, 14]
    }, {
        monitoring_input: [121, 142],
        content_detection: [112, 124],
        digital_media: [111.4, 122.6],
        monitoring_ooh: [51, 72],
        measuring_output: [110.5, 124],
        other_service: [121, 142]
    }];
    vm.sums = [0, 0];
    vm.getSums = function () {
        vm.sums = [0, 0];
        for (var p in vm.prices[vm.plan_type]) {
            vm.sums[0] += vm.prices[vm.plan_type][p][0] * 1;
            vm.sums[1] += vm.prices[vm.plan_type][p][1] * 1;
        }
    }
    vm.getSums();
});