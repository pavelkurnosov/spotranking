'use strict';

angular.module('app.biz').controller('RtvReportController', function (DTOptionsBuilder, DTColumnBuilder) {
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
        {id: 4, name: 'TV', articleType: 'tv_radio'},
        {id: 5, name: 'Radio', articleType: 'tv_radio'}
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


    vm.standardOptions = DTOptionsBuilder
        .fromSource('app/biz/outlet_data.json')
        .withDOM("<'dt-toolbar'<'col-xs-12 col-sm-6'f><'col-sm-6 col-xs-12 hidden-xs'l>r>")
        .withButtons([
            /*'columnsToggle',*/
            'colvis',
            /*'print',
            'copy',*/
            'pdf',
            'excel',
            'csv',
            {
                text: 'Report',
                key: '1',
                action: function (e, dt, node, config) {
                    alert('Report will be created.');
                }
            }
        ])
        .withBootstrap();

    vm.standardColumns = [
        DTColumnBuilder.newColumn('country')/*.withClass('text-danger')*/,
        DTColumnBuilder.newColumn('lang'),
        DTColumnBuilder.newColumn('ymd'),
        DTColumnBuilder.newColumn('landing_page'),
        DTColumnBuilder.newColumn('creative_type'),
        DTColumnBuilder.newColumn('times_seen'),
        DTColumnBuilder.newColumn('days_seen'),
        DTColumnBuilder.newColumn('first_seen'),
        DTColumnBuilder.newColumn('last_seen'),
        DTColumnBuilder.newColumn('ads_size'),
        DTColumnBuilder.newColumn('creative_type'),
        DTColumnBuilder.newColumn('ads_forum'),
        DTColumnBuilder.newColumn('first_seen'),
        DTColumnBuilder.newColumn('days_seen')
    ];

});