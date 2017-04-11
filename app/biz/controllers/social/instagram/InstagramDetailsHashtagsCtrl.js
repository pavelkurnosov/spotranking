'use strict';

angular.module('app.biz').controller('InstagramDetailsHashtagsController', function ($state) {
    var vm = this;

    vm.detailMode = true;

    vm.gridColumns = [
        {
            id: 1, title: 'ENGAGEMENT TOTAL', acronym: 'Eng.Total', visible: true,
            columns: [
                {id: 11, title: 'APPLAUSE', acronym: 'Applause'},
                {id: 12, title: 'CONVERSATION', acronym: 'Conversation'},
                {id: 13, title: 'AMPLIFICATION', acronym: 'Amplification'}
            ]
        },
        {id: 2, title: 'POSTS USING', acronym: 'Posts Using'},
        {id: 3, title: 'COMPANIES USING', acronym: 'Companies Using', visible: true},
        {id: 4, title: 'ENGAGEMENT RATE / POST', acronym: 'Eng.Rate/Post'},
        {id: 5, title: 'ENGAGEMENT TOTAL / POST', acronym: 'Eng.Total/Post'},
        {id: 5, title: 'POTENTIAL REACH', acronym: 'Potential Reach'}
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