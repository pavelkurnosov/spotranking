'use strict';

angular.module('app.biz').controller('CrossChannelsDetailsPostsController', function ($state) {
    var vm = this;
    vm.gridColumns = [
        {
            id: 1, title: 'ENGAGEMENT TOTAL', acronym: 'Eng.Total', visible: true,
            columns: [
                {id: 11, title: 'APPLAUSE', acronym: 'Applause'},
                {id: 12, title: 'CONVERSATION', acronym: 'Conversation'},
                {id: 13, title: 'AMPLIFICATION', acronym: 'Amplification'}
            ]
        },
        {id: 2, title: 'AUDIENCE', acronym: 'Audience'},
        {id: 3, title: 'ENGAGEMENT RATE', acronym: 'Eng.Rate', visible: true},
        {id: 4, title: 'POST TYPE', acronym: 'Post Type'},
        {id: 5, title: 'PRESENCE HANDLE', acronym: 'Presence Handle'}
    ];
    vm.columnsForGrid = [];
    for (var col in vm.gridColumns) {
        vm.columnsForGrid[vm.columnsForGrid.length] = vm.gridColumns[col];
        if (typeof vm.gridColumns[col].columns == 'object') {
            for (var c in vm.gridColumns[col].columns) {
                vm.columnsForGrid[vm.columnsForGrid.length] = vm.gridColumns[col].columns[c];
            }
        }
    }
    vm.go = function (state) {
        $state.go('app.biz.' + state);
    };
});