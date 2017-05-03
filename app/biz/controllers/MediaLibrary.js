'use strict';

angular.module('app.biz').controller('MediaLibraryController', function ($filter) {
    var vm = this;
    vm.mediaTypes = [
        {
            id: 1, name: 'Billboards', checked: true,
            formats: [
                {id: 1, name: 'Bulletins'},
                {id: 2, name: 'Mupis'},
                {id: 3, name: 'Megacoms'},
                {id: 4, name: 'Lamp posts'},
                {id: 5, name: 'Unipoles'},
                {id: 6, name: 'Rooftops'},
                {id: 7, name: 'Building wrap'},
                {id: 8, name: 'Bridge'},
                {id: 9, name: 'Hoarding'},
                {id: 10, name: 'Spectacular'},
                {id: 11, name: 'Double Decker double sided'},
                {id: 12, name: 'Double Decker single-sided'}
            ]
        },
        {
            id: 2, name: 'Street Furniture',
            formats: [
                {id: 13, name: 'Bus Shelter'},
                {id: 14, name: 'Bus Shelter Wraps'},
                {id: 15, name: 'Bus Bench'},
                {id: 16, name: 'City Information Panels'},
                {id: 17, name: 'Kiosks'},
                {id: 18, name: 'Newsstand Kiosks'},
                {id: 19, name: 'Bicycles and Bicycle Racks'},
                {id: 20, name: 'Urban Panels'}
            ]
        },
        {
            id: 3, name: 'Transit and Transportation',
            formats: [
                {id: 21, name: 'Digital Airport Screens'},
                {id: 22, name: 'Baggage Claim LCDs'},
                {id: 23, name: 'Baggage Cart Sponsorship'},
                {id: 24, name: 'Door Wraps'},
                {id: 25, name: 'Courtesy Phone Centers'},
                {id: 26, name: 'Airport Posters'},
                {id: 27, name: 'POP displays'},
                {id: 28, name: 'Secure Tray Advertising"'},
                {id: 29, name: 'Airports Panels'},
                {id: 30, name: 'KiosksÂ'},
                {id: 31, name: 'ShowcasesÂ'},
                {id: 32, name: 'Courtesy Phone CentersÂ'},
                {id: 33, name: 'Airport Charging Stations"'},
                {id: 34, name: 'Airport Bus Shelters'},
                {id: 35, name: 'Airport Jet Bridges'},
                {id: 36, name: 'Airport Spectaculars'},
                {id: 37, name: 'Airport Preferred Parking'},
                {id: 38, name: 'AirTrain'},
                {id: 39, name: 'Airport Exhibition & Promotion AreasÂ'},
                {id: 40, name: 'Airport Digital Screens'},
                {id: 41, name: 'Airport Dioramas'},
                {id: 42, name: 'Airport Wraps'},
                {id: 43, name: 'Airport Posters'},
                {id: 45, name: 'Airport Bus Shelters'},
                {id: 46, name: 'AirTrain'},
                {id: 47, name: 'Airport Preferred Parking'},
                {id: 48, name: 'Bus Rears & Mega Rears'},
                {id: 49, name: 'Bus Superside'},
                {id: 50, name: 'Bus T-Side'},
                {id: 51, name: 'Bus Full Wraps'},
                {id: 52, name: 'Bus Handle Ads'},
                {id: 53, name: 'Bus Posters Ads'},
                {id: 54, name: 'Subway & Railway Interior Display'},
                {id: 55, name: 'Subway & Railway Backbit Diorama'},
                {id: 56, name: 'Subway & Railway Transit Station'},
                {id: 57, name: 'Train wrapped exterior'},
                {id: 58, name: 'Turnstile Ads'},
                {id: 59, name: 'Directional and Commuter Clocks'},
                {id: 60, name: 'Station Posters'},
                {id: 61, name: 'Taxi Top'},
                {id: 62, name: 'Taxi Trunk Ads'},
                {id: 63, name: 'Taxi Full Wrap Ads'},
                {id: 64, name: 'Taxi TV'},
                {id: 65, name: 'Gas Pump Ads'},
                {id: 66, name: 'Fillboard stations ads'}
            ]
        },
        {
            id: 4, name: 'Mall Scape',
            formats: [
                {id: 67, name: 'Shopping Mall Free Standing Displays'},
                {id: 68, name: ' Shopping Mall POP displays'},
                {id: 69, name: 'Mall Escalators'},
                {id: 70, name: 'Malls Posters'},
                {id: 71, name: 'In store Ads'},
                {id: 72, name: 'Shopping Cart'},
                {id: 73, name: 'Table Top Displays'},
                {id: 74, name: 'Elevator Wrap'},
                {id: 75, name: 'Checkout Divider Advertising'},
                {id: 76, name: 'School Campus Screens'},
                {id: 77, name: 'School Campus Panels'},
                {id: 78, name: 'Sampling Teams'},
                {id: 79, name: 'Projection Media'},
                {id: 80, name: 'Arena / Stadium Panels'},
                {id: 81, name: 'Marine Vessels'},
                {id: 82, name: 'In-Store Screens'},
                {id: 83, name: 'Digital Cinema Screens'},
                {id: 84, name: 'Blimps & Custom Inflatables'},
                {id: 85, name: 'Aerial Banners'}
            ]
        },
        {
            id: 5, name: 'Arena & Stadiums',
            formats: [
                {id: 86, name: 'Scoreboards'},
                {id: 87, name: 'Dioramas'},
                {id: 88, name: 'Facade Units'},
                {id: 89, name: 'Out-of-Town Scoreboards'},
                {id: 90, name: 'Dashers'},
                {id: 91, name: 'Courtside'},
                {id: 92, name: 'Replay Screen Spots'}
            ]
        }
    ];
    vm.currMediaType = vm.mediaTypes[0];

    vm.getMediaFormats = function () {
        var checkedMediaTypes = $filter('filter')(vm.mediaTypes, {checked: true});
        vm.mediaFormats = [];
        angular.forEach(checkedMediaTypes, function (val, key) {
            angular.forEach(val.formats, function (v, k) {
                vm.mediaFormats[vm.mediaFormats.length] = v;
            });
        });
        return vm.mediaFormats;
    };

    vm.countries = [
        {id: "UA", name: "United Arab Eliminate"},
        {id: "GE", name: "Germany"},
        {id: "TK", name: "Turkey"},
        {id: "FR", name: "France"},
        {id: "IN", name: "India"}
    ];

    vm.checkAllMedias = function (flag) {
        angular.forEach(vm.mediaTypes, function (val, key) {
            val.checked = flag;
        });
    }

});