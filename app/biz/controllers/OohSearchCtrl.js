'use strict';

angular.module('app.biz').controller('OohSearchController', function () {
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

    vm.industries = [
        {
            id: 1, name: "Accounting & Consulting / Comptabilité et Conseil", subIndustries: [
            {id: 101, name: "Human Resource Services and Outsourcing"},
            {id: 102, name: "Management Consulting / Conseil en Gestion"},
            {id: 103, name: "Real Estate Consulting"},
            {id: 104, name: "Recruitment"},
            {id: 105, name: "Tax and Audit Service"},
            {id: 106, name: "E-Business/Online Consulting Services"}
        ]
        }, {
            id: 2, name: "Advisory / Consultatif", subIndustries: [
                {id: 108, name: "Financial Planning"},
                {id: 109, name: "Portfolio Management Service"},
                {id: 110, name: "Seminar"},
                {id: 111, name: "Consulting agency"}
            ]
        }, {
            id: 3, name: "Aerospace Defense Contractors / Aéronautique and Défense", subIndustries: [
                {id: 112, name: "Civil Aircraft Manufacturers"},
                {id: 113, name: "Aircraft Engine Manufacturers"},
                {id: 114, name: "Defence security & Aerospace Company"},
                {id: 115, name: "Business Jet"},
                {id: 116, name: "Cargo Aircrafts"}
            ]
        }, {
            id: 4, name: "Airlines / Compagnie Aérienne", subIndustries: [
                {id: 117, name: "Airline Vacation Packages & Promotion"},
                {id: 118, name: "Airline Frequent Flyer Programs"},
                {id: 119, name: "Airlines Alliance Program"},
                {id: 120, name: "Airlines New Destination"},
                {id: 121, name: "Low-cost Carrier"},
                {id: 122, name: "In-flight Entertainment"},
                {id: 123, name: "Airlines Services"}
            ]
        }, {
            id: 5, name: "Amusement Parks / Parcs D'attractions", subIndustries: [
                {id: 124, name: "Aquarium"},
                {id: 125, name: "Theme Parks / Parc à Thèmes"},
                {id: 126, name: "Wildlife Park"},
                {id: 127, name: "Zoo Park"},
                {id: 128, name: "Aquatic"}
            ]
        }, {
            id: 6, name: "Associations", subIndustries: [
                {id: 129, name: "Humanitarian Organizations"},
                {id: 130, name: "Political Party"},
                {id: 131, name: "Business organizations"},
                {id: 132, name: "promoteurs immobiliers"}
            ]
        }, {
            id: 7, name: "Automobile Industry / Industrie de l'automobile", subIndustries: [
                {id: 133, name: "Domestic Cars"},
                {id: 134, name: "Domestic cars / Voiture Touristique"},
                {id: 135, name: "Hybrid Cars / Voitures Hybrides"},
                {id: 136, name: "SUV Cars"},
                {id: 137, name: "Trucks / Poids Lourd"},
                {id: 138, name: "Sport Cars / Voiture de Sport"},
                {id: 139, name: "Manufacturer subsidiary / Filiale"},
                {id: 140, name: "Car Dealer  / Concessionnaire"},
                {id: 141, name: "Tires Manufacturers / Fabricants de Pneumatiques"},
                {id: 142, name: "Auto parts / Pièces Auto"},
                {id: 143, name: "Motorbike / Motocyclette"},
                {id: 144, name: "Battery / Batterie"},
                {id: 145, name: "Automobile Manufacturer"},
                {id: 146, name: "Motorcycle"},
                {id: 147, name: "Commercial Vehicles / Véhicules Utilitaires"}
            ]
        }, {
            id: 8, name: "Baby & Toys / Bébé & Jouets", subIndustries: [
                {id: 148, name: "Diapering /  Les Couches"},
                {id: 149, name: "Baby Food / L'alimentation de Bébé"},
                {id: 150, name: "Baby Gear /  Puériculture"},
                {id: 151, name: "Baby Bath & Skin Care /  Bain de bébé et soins de la peau"},
                {id: 152, name: "Maternity & Breastfeeding / Maternité & Allaitement"}
            ]
        }, {
            id: 9, name: "Clothing Industry  / Industrie du Vêtement", subIndustries: [
                {id: 153, name: "Athletic Clothing / Vêtements de Sport"},
                {id: 154, name: "Underwear / Sous-Vêtements"},
                {id: 155, name: "Children's Underwear / Sous-vêtements Enfants"},
                {id: 156, name: "Men's Clothing / Vêtements pour Hommes"},
                {id: 157, name: "Women's Clothing / Vêtements pour Femmes"},
                {id: 158, name: "Children's Clothing / Vêtements pour Enfants"},
                {id: 159, name: "Socks / Chaussettes"}
            ]
        }, {
            id: 10, name: "Conference and Exhibition", subIndustries: [
                {id: 160, name: "Complex for Events and Exhibitions"},
                {id: 161, name: "Professional conference organiser"},
                {id: 162, name: "Trade Show / Salon professionnel"},
                {id: 163, name: "Trade Show Attendee / Participant au salon"}
            ]
        }, {
            id: 11, name: "Consumer Computer & Electronics / Électronique Grand Public", subIndustries: [
                {id: 164, name: "Entertainment Equipment"},
                {id: 165, name: "Communications Equipment"},
                {id: 166, name: "Home Furniture & Appliance / Meubles & électroménager"},
                {id: 167, name: "Hardware and Electronics"},
                {id: 168, name: "Computer Software"},
                {id: 169, name: "Gaming"}
            ]
        }, {
            id: 12, name: "Cosmetic Industry / Cosmétique", subIndustries: [
                {id: 170, name: "Fragrances/ Parfums"},
                {id: 171, name: "Makeup / Maquillage"},
                {id: 172, name: "Hair Care / Soin des Cheveux"},
                {id: 173, name: "Men's Grooming / Toilettage pour hommes"},
                {id: 174, name: "Bath & Body / Corps & Bain"},
                {id: 175, name: "Skincare / Soin Visage"},
                {id: 176, name: "Nails-Makeup / Soins des Ongles"}
            ]
        }, {
            id: 13, name: "E-commerce", subIndustries: [
                {id: 177, name: "e-commerce Platform"},
                {id: 178, name: "Free Classifieds Platform/ sites d'annonces gratuites"}
            ]
        }, {
            id: 14, name: "Education / Éducation", subIndustries: [
                {id: 179, name: "Private schools"}
            ]
        }, {
            id: 15, name: "Energy / Énergie", subIndustries: [
                {id: 180, name: "Electrical Components & Equipment / Composants électriques"},
                {id: 181, name: "Producer and Supplier of Electricity/ Producteur et Fournisseur D'électricité"},
                {id: 182, name: "Petrochemical"},
                {id: 183, name: "Oil & Gas Exploration & Production"}
            ]
        }, {
            id: 16, name: "Financial services / Services Financiers", subIndustries: [
                {id: 184, name: "General Bank Services"},
                {id: 185, name: "Credit Card"},
                {id: 186, name: "Insurance Company"},
                {id: 187, name: "Financial Market"},
                {id: 188, name: "Wealth Management"},
                {id: 189, name: "Credit Rating Agencies"},
                {id: 190, name: "Islamic Banking"},
                {id: 191, name: "Merchant services"},
                {id: 192, name: "Funding Agency / Organisme de Financement"}
            ]
        }
    ];
    vm.currIndustry = vm.industries[0];
    vm.currSubIndustry = vm.currIndustry['subIndustries'][0];

    vm.brands = [
        {id: 1, name: 'All Brands'},
        {id: 2, name: 'MyCompany'},
        {id: 3, name: 'Competitor name1'},
        {id: 4, name: 'Competitor name2'},
        {id: 5, name: 'Competitor name3'}
    ];
    vm.currBrand = vm.brands[0];

    vm.products = [
        {id: 1, name: 'CAMRY 2016'},
        {id: 2, name: 'CAMRY 2017'},
        {id: 3, name: 'CAMRY 2018'},
        {id: 4, name: 'CAMRY 2019'}
    ];
    vm.currProduct = vm.products[0];

    vm.articlesPerPage = "100";
    vm.searchFlag = true;
    vm.articles = [];
    vm.articleTypes = {
        'newspaper': ['country', 'language', 'date', 'publication_name', 'geographical_scope', 'number_of_ads', 'published_section', 'page_number', 'image_specification', 'advertiser', 'product_name', 'advertising_forum', 'campaign_message', 'camp_id'],
        'tv_radio': ['country', 'language', 'broadcast_source', 'first_run', 'last_run', 'spot_length', 'advertiser', 'product_name', 'advertising_form', 'campaign_message', 'camp_id'],
        'ooh': ['ooh_supplier', 'country', 'city', 'street_name', 'language', 'first_run', 'last_run', 'ooh_media_category', 'ooh_media_format', 'circuit_distance', 'geo_location', 'ooh_display_number', 'advertising_forum', 'advertiser', 'product_name', 'campaign_message', 'camp_id'],
        'web': ['country', 'language', 'date', 'landing_page', 'creative_type', 'time_seen', 'days_seen', 'first_seen', 'last_seen', 'ad_size', 'advertising_forum', 'advertiser', 'product_name', 'campaign_message', 'camp_id']
    };
    vm.search = function () {
        if (vm.searchFlag) {
            for (var a = 1; a <= 2; a++) {
                vm.articles[vm.articles.length] = {
                    'icon': '01.png',
                    'type': 'newspaper',
                    'country': 'country' + a,
                    'language': '',
                    'date': '',
                    'publication_name': '',
                    'geographical_scope': '',
                    'number_of_ads': '',
                    'published_section': '',
                    'page_number': '',
                    'image_specification': '',
                    'advertiser': '',
                    'product_name': '',
                    'advertising_forum': '',
                    'campaign_message': '',
                    'camp_id': '',
                    'image': 'cover.png'
                };
                vm.articles[vm.articles.length] = {
                    'icon': '03.png',
                    'type': 'tv_radio',
                    'country': 'country' + a,
                    'language': '',
                    'broadcast_source': '',
                    'first_run': '',
                    'last_run': '',
                    'spot_length': '',
                    'advertiser': '',
                    'product_name': '',
                    'advertising_form': '',
                    'campaign_message': '',
                    'camp_id': '',
                    'video': 'video.mp4'
                };
                vm.articles[vm.articles.length] = {
                    'icon': '06.png',
                    'type': 'ooh',
                    'ooh_supplier': '',
                    'country': 'country' + a,
                    'city': '',
                    'street_name': '',
                    'language': '',
                    'first_run': '',
                    'last_run': '',
                    'ooh_media_category': '',
                    'ooh_media_format': '',
                    'circuit_distance': '',
                    'geo_location': '',
                    'ooh_display_number': '',
                    'advertising_forum': '',
                    'advertiser': '',
                    'product_name': '',
                    'campaign_message': '',
                    'camp_id': '',
                    'image': 'cover.png'
                };
                vm.articles[vm.articles.length] = {
                    'icon': '05.png',
                    'type': 'web',
                    'country': 'country' + a,
                    'language': '',
                    'date': '',
                    'landing_page': '',
                    'creative_type': '',
                    'time_seen': '',
                    'days_seen': '',
                    'first_seen': '',
                    'last_seen': '',
                    'ad_size': '',
                    'advertising_forum': '',
                    'advertiser': '',
                    'product_name': '',
                    'campaign_message': '',
                    'camp_id': '',
                    'image': 'cover.png'
                };
            }
            vm.searchCounts = {
                total: 76,
                television: 20,
                newspaper: 4,
                magazine: 5,
                radio: 33,
                online_display: 6,
                outdoor: 8
            };
        } else {
            vm.articles = [];
            vm.currCountry = {};
            vm.currLanguage = {};
            vm.currSubIndustry = {};
            vm.currBrand = {};
            vm.currProduct = {};
            vm.tags = [];
            vm.dateString = '';
            for (var m in vm.mediaTypes) {
                vm.mediaTypes[m]['checked'] = false;
            }
            vm.searchCounts = {
                total: 0,
                television: 0,
                newspaper: 0,
                magazine: 0,
                radio: 0,
                online_display: 0,
                outdoor: 0
            };
        }
        vm.searchFlag = !vm.searchFlag;
    }
    vm.search();
});