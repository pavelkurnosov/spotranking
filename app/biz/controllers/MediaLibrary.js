'use strict';

angular.module('app.biz').controller('MediaLibraryController', function ($scope) {
    var vm = this;
    vm.mediaTypes = [
        {id: 1, name: 'Billboards', formats: [
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
        ]},
        {id: 2, name: 'Street Furniture', formats: [
            {id: 13, name: 'Bus Shelter'},
            {id: 14, name: 'Bus Shelter Wraps'},
            {id: 15, name: 'Bus Bench'},
            {id: 16, name: 'City Information Panels'},
            {id: 17, name: 'Kiosks'},
            {id: 18, name: 'Newsstand Kiosks'},
            {id: 19, name: 'Bicycles and Bicycle Racks'},
            {id: 20, name: 'Urban Panels'}
        ]},
        {id: 3, name: 'Transit and Transportation', formats: [
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
            /*{id: 1, name: 'Airport Exhibition & Promotion AreasÂ'},
             {id: 1, name: 'Airport Digital Screens'},
             {id: 1, name: 'Airport Dioramas'},
             {id: 1, name: 'Airport Wraps'},
             {id: 1, name: 'Airport Posters'},
             {id: 1, name: 'Airport Bus Shelters'},
             {id: 1, name: 'AirTrain'},
             {id: 1, name: 'Airport Preferred Parking'},
             {id: 1, name: 'Bus Rears & Mega Rears'},
             {id: 1, name: 'Bus Superside'},
             {id: 1, name: 'Bus T-Side'},
             {id: 1, name: 'Bus Full Wraps'},
             {id: 1, name: 'Bus Handle Ads'},
             {id: 1, name: 'Bus Posters Ads'},
             {id: 1, name: 'Subway & Railway Interior Display'},
             {id: 1, name: 'Subway & Railway Backbit Diorama'},
             {id: 1, name: 'Subway & Railway Transit Station'},
             {id: 1, name: 'Train wrapped exterior'},
             {id: 1, name: 'Turnstile Ads'},
             {id: 1, name: 'Directional and Commuter Clocks'},
             {id: 1, name: 'Station Posters'},
             {id: 1, name: 'Taxi Top'},
             {id: 1, name: 'Taxi Trunk Ads'},
             {id: 1, name: 'Taxi Full Wrap Ads'},
             {id: 1, name: 'Taxi TV'},
             {id: 1, name: 'Gas Pump Ads'},
             {id: 1, name: 'Fillboard stations ads'}*/
        ]},
        {id: 4, name: 'Mall Scape', formats: [
            {id: 1, name: 'Shopping Mall Free Standing Displays'},
            {id: 1, name: ' Shopping Mall POP displays'},
            {id: 1, name: 'Mall Escalators'},
            {id: 1, name: 'Malls Posters'},
            {id: 1, name: 'In store Ads'},
            {id: 1, name: 'Shopping Cart'},
            {id: 1, name: 'Table Top Displays'},
            {id: 1, name: 'Elevator Wrap'},
            {id: 1, name: 'Checkout Divider Advertising'},
            {id: 1, name: 'School Campus Screens'},
            {id: 1, name: 'School Campus Panels'},
            {id: 1, name: 'Sampling Teams'},
            {id: 1, name: 'Projection Media'},
            {id: 1, name: 'Arena / Stadium Panels'},
            {id: 1, name: 'Marine Vessels'},
            {id: 1, name: 'In-Store Screens'},
            {id: 1, name: 'Digital Cinema Screens'},
            {id: 1, name: 'Blimps & Custom Inflatables'},
            {id: 1, name: 'Aerial Banners'}
        ]},
        {id: 5, name: 'Arena & Stadiums', formats: [
            {id: 1, name: 'Scoreboards'},
            {id: 1, name: 'Dioramas'},
            {id: 1, name: 'Facade Units'},
            {id: 1, name: 'Out-of-Town Scoreboards'},
            {id: 1, name: 'Dashers'},
            {id: 1, name: 'Courtside'},
            {id: 1, name: 'Replay Screen Spots'}
        ]}
    ];
    vm.currMediaType = vm.mediaTypes[0];

    vm.countries = [
        {id: "UA", name: "United Arab Eliminate"},
        {id: "GE", name: "Germany"},
        {id: "TK", name: "Turkey"},
        {id: "FR", name: "France"},
        {id: "IN", name: "India"}
    ];

});