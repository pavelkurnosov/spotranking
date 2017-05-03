'use strict';

angular.module('app.biz').controller('InventoryMapController', function () {
    var vm = this;
    vm.countries = [
        {
            id: "UA",
            name: "United Arab Emirates",
            cities: [
                {
                    id: 1, name: "Abu Dhabi",
                    pos: {lat: 24.3867965, lng: 54.4198228}
                }, {
                    id: 1, name: "Sharjah",
                    pos: {lat: 25.317427, lng: 55.4408545}
                }, {
                    id: 1, name: "Dubai",
                    pos: {lat: 25.074718, lng: 54.9479163}
                }, {
                    id: 1, name: "Al Ain",
                    pos: {lat: 24.0302901, lng: 55.712525}
                }
            ]
        }, {
            id: "TU",
            name: "Turkey",
            cities: [
                {
                    id: 1, name: "Adana",
                    pos: {lat: 36.9975315, lng: 35.2180271}
                }, {
                    id: 1, name: "Kayseri",
                    pos: {lat: 38.723514, lng: 35.4001472}
                }, {
                    id: 1, name: "Konya",
                    pos: {lat: 37.8786945, lng: 32.3663986}
                }
            ]
        }
    ];
    vm.currCountry = vm.countries[0];

    vm.map = {
        center: {
            latitude: 48.815193,
            longitude: 2.37825
        },
        zoom: 3,
        control: {}
    };

    vm.showCountryOnMap = function (flag) {
        vm.centerMap();
        vm.map.zoom = 6;
    };
    vm.showCityOnMap = function (flag) {
        vm.centerMap();
        vm.map.zoom = 11;
    };
    vm.centerMap = function () {
        vm.map.center.latitude = vm.currCity.pos.lat;
        vm.map.center.longitude = vm.currCity.pos.lng;
    };
});