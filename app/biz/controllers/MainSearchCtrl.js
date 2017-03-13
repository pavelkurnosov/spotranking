'use strict';

angular.module('app.biz').controller('MainSearchController', function ($window) {
    var vm = this;

    vm.fixedSummaryDiv = false;
    vm.checks = [];
    vm.extendTableVisible = [];

    vm.dates4 = { startDate: moment().subtract(1, 'day'), endDate: moment().subtract(1, 'day') };


    vm.backToTop = function () {
        document.body.scrollTop = 0;
    };


    angular.element($window).bind("scroll", function () {
        vm.fixedSummaryDiv = document.body.scrollTop > 50;
    });

});