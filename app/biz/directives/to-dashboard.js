'use strict';

angular
    .module('app')
    .directive('toDashboard', function () {
        var directive = {};

        directive.restrict = 'E';

        var html = '<button class="btn btn-xs btn-primary" style="margin-top: -2px; margin-right: 5px;" ng-click="addToDashboard()">Add to Dashboard</button>';

        directive.template = html;

        directive.scope = {

        };

        directive.link = function (scope, element, attrs) {
            scope.addToDashboard = function () {
                console.log(element)
            };
        };
        return directive;
    });
