'use strict';

angular.module('app.graphs').directive('highchart', function () {
    return {
        restrict: 'A',
        scope: {
            id: '=',
            data: '='
        },
        link: function (scope, element, attributes) {
            if (element[0].id) {
                Highcharts.chart(element[0].id, scope.data);
            } else {
                console.log('missing id in canvas div');
            }
        }
    }
});