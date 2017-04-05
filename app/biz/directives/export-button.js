'use strict';

angular
    .module('app')
    .directive('exportButton', function () {
        var directive = {};

        directive.restrict = 'E';

        var html = '<div class="btn-group dropdown float-right {{class}}" data-dropdown="">';
        html += '<button class="btn btn-primary dropdown-toggle" data-toggle="dropdown">';
        html += 'Export <span class="caret"></span>';
        html += '</button>';
        html += '<ul class="dropdown-menu pull-right">';
        html += '<li>';
        html += '<a href-void="" href="#">Download a PPT</a>';
        html += '<a href-void="" href="#">Download a PDF</a>';
        html += '<a href-void="" href="#">Download a PNG</a>';
        html += '<hr class="margin-top-5 margin-bottom-5"/>';
        html += '<a href-void="" href="#">Email...</a>';
        html += '<a href-void="" href="#">Schedule...</a>';
        html += '<hr class="margin-top-5 margin-bottom-5"/>';
        html += '<a href-void="" href="#">Customize Branding</a>';
        html += '</li>';
        html += '</ul>';
        html += '</div>';

        directive.template = html;

        directive.scope = {
            class: "@"
        };

        directive.link = function (scope, element, attrs) {

        };
        return directive;
    });
