'use strict';

angular.module('app.biz').controller('ChangeBillingController', function ($state) {
    var vm = this;
    vm.expires = {y: '2017', m: '4'}
    vm.go = function (state) {
        $state.go('app.biz.' + state);
    }
});