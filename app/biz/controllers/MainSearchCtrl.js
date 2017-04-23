'use strict';

angular.module('app.biz').controller('MainSearchController', function ($scope, $filter, $state) {
    var vm = this;

    vm.countries = [
        {id: "UA", name: "United Arab Eliminate"},
        {id: "GE", name: "Germany"},
        {id: "TK", name: "Turkey"},
        {id: "FR", name: "France"},
        {id: "IN", name: "India"}
    ];
    vm.currCountry = vm.countries[0];

    vm.languages = [
        {id: 1, name: 'English'},
        {id: 2, name: 'Arabic'},
        {id: 3, name: 'Chinese'},
        {id: 4, name: 'Franches'}
    ];
    vm.currLanguage = vm.languages[0];

    vm.mediaTypes = [
        {id: 2, name: 'Newspapers', articleType: 'newspaper'},
        {id: 3, name: 'Magazine', articleType: 'newspaper'},
        {id: 4, name: 'TV', articleType: 'tv_radio'},
        {id: 5, name: 'Radio', articleType: 'tv_radio'},
        {id: 6, name: 'Web Display', articleType: 'web'},
        {id: 7, name: 'OOH Display', articleType: 'ooh'}
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

    vm.tags = [
        {text: 'unicef'},
        {text: 'nissan'},
        {text: 'sonic'}
    ];

    vm.currPage = 2;

    vm.fixedSummaryDiv = false;
    vm.checks = [];
    vm.extendTableVisible = [];

    vm.ranges = {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
        'Last 7 days': [moment().subtract('days', 7), moment()],
        'Last 30 days': [moment().subtract('days', 30), moment()],
        'This month': [moment().startOf('month'), moment().endOf('month')]
    };

    vm.dateRange = {
        startDate: moment().subtract(1, 'day'),
        endDate: moment().subtract(1, 'day')
    };
    $scope.$watch('vm.dateRange', function () {
        vm.dateString = moment(vm.dateRange['startDate']).format('MM/DD/YYYY') + ' ~ ' + moment(vm.dateRange['endDate']).format('MM/DD/YYYY');
    });

    vm.backToTop = function () {
        document.body.scrollTop = 0;
        angular.element('.main-search-result')[0].scrollTop = 0;
    };

    vm.articles = [];

    vm.searchFlag = true;
    /*vm.articles[vm.articles.length] = {
     type: 'tv',
     ad_code: 'TOY/Print/130816/01----------' + a,
     advertiser: 'Toyota',
     product_name: '2017 Toyota Camry',
     first_run: '17/07/2016',
     last_run: '20/07/2016',
     published: '25',
     campaign_message: 'New Kind of Lunry, a head of its time. Introducing the all new Camry Hybrid',
     country: 'United Arab Eliminate',
     publication_name: 'EI Watan',
     section: 'National',
     page_number: '2',
     image_specs: 'B&W',
     advertising_form: 'xxxxxx',
     ads_type: 'Banner advertising',
     ads_size: '1/4 Vertical',
     frequency: 'Daily',
     language: 'Arabic',
     format: 'Tabloid',
     circulation: '30000',
     image: 'cover.png'
     };*/
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


    //--------- Pagination ------------
    vm.articlesPerPage = 10;

    vm.checkAllMediaTypes = function () {
        vm.allMediaCheck = !vm.allMediaCheck
        for (var m in vm.mediaTypes) {
            vm.mediaTypes[m]['checked'] = vm.allMediaCheck;
        }
    };
    vm.checkAllArticles = function () {
        for (var a in vm.articles) {
            vm.articles[a]['checked'] = vm.allArticlesCheck;
        }
    };

    vm.getMediaNames = function () {
        var medias = $filter('filter')(vm.mediaTypes, {checked: true});
        var mediaNames = [];
        for (var m in medias) {
            mediaNames[mediaNames.length] = medias[m]['name'];
        }
        return mediaNames.join(', ');
    }
    vm.extendTableVisible = [];

    vm.go = function (state) {
        $state.go('app.biz.' + state);
    };
});

