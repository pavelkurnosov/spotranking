'use strict';

angular.module('app.biz').controller('GoogleplusDetailsActivityController', function ($state) {
    var vm = this;
    vm.go = function (state) {
        $state.go('app.biz.' + state);
    };
});