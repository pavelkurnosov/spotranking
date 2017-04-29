'use strict';

angular.module('app.biz').controller('InventoryMapController', function () {
    var vm = this;
    vm.countries = [
        {id: "UA", name: "United Arab Eliminate"},
        {id: "GE", name: "Germany"},
        {id: "TK", name: "Turkey"},
        {id: "FR", name: "France"},
        {id: "IN", name: "India"}
    ];
    vm.currCountry = vm.countries[0];

    vm.cities = [
        {id: 1, name: 'Los Angels'},
        {id: 2, name: 'London'},
        {id: 3, name: 'Berlin'},
        {id: 4, name: 'Amsterdam'}
    ];
    vm.currCity = vm.cities[0];

    vm.map = {
        center: {
            latitude: 48.815193,
            longitude: 2.37825
        },
        zoom: 3,
        control: {}
    };


});