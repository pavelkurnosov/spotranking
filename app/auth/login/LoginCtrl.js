"use strict";

angular.module('app.auth').controller('LoginCtrl', function ($scope, $state, UserService) {
    var vm = this;
    vm.loading = false;

    vm.login = function () {
        if (vm.form.signin.$invalid) return false;
        vm.submit = true;

        UserService.Login(vm.email, vm.password).then(function (res) {
            if (res.data.status == 'logged in') {
                localStorage.token = res.data.token;
                $state.go('app.biz.dashboard');
            } else {
                alert(res.data.status);
            }
        });
    };
})
