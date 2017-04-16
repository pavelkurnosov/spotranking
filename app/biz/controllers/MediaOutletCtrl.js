'use strict';

angular.module('app.biz').controller('MediaOutletController', function (DTOptionsBuilder, DTColumnBuilder) {
    var vm = this;

    vm.medias = [
        { title: "Print Media", image: "./styles/img/temp/icons/01.png"},
        { title: "TV Channel", image: "./styles/img/temp/icons/02.png"},
        { title: "FM Radio", image: "./styles/img/temp/icons/03.png"}
    ];

    vm.standardOptions = DTOptionsBuilder
        .fromSource('app/biz/outlet_data.json')
        .withDOM("<'dt-toolbar'<'col-xs-12 col-sm-6'f><'col-sm-6 col-xs-12 hidden-xs'l>r>t<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>")
        .withButtons([
            /*'columnsToggle',*/
            'colvis',
            'print',
            'copy',
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
        DTColumnBuilder.newColumn('ads_forum')
    ];
});