'use strict';

angular.module('app.biz').controller('TwitterDetailsActivityController', function ($state) {
    var vm = this;
    vm.go = function (state) {
        $state.go('app.biz.' + state);
    };
});