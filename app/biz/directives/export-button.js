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
        html += '<a href="#" ng-click="generatePPT()">Download a PPT</a>';
        html += '<a href="#" ng-click="generatePDF()">Download a PDF</a>';
        html += '<a href="#" ng-click="generatePNG()">Download a PNG</a>';
        html += '<hr class="margin-top-5 margin-bottom-5"/>';
        html += '<a href="#">Email...</a>';
        html += '<a href="#">Schedule...</a>';
        html += '<hr class="margin-top-5 margin-bottom-5"/>';
        html += '<a href="#">Customize Branding</a>';
        html += '</li>';
        html += '</ul>';
        html += '</div>';

        directive.template = html;

        directive.scope = {
            source: "@",
            class: "@"
        };

        directive.link = function (scope, element, attrs) {
            scope.generatePPT = function () {

            };
            scope.generatePDF = function () {
                html2canvas(document.getElementById(scope.source), {
                    onrendered: function(canvas) {
                        var imgData = canvas.toDataURL('image/png');
                        var doc = new jsPDF('l', 'mm', 'a4');
                        doc.addImage(imgData, 'png', 10, 10);
                        doc.save('SpotRanking.pdf');       // used the file name as current time.
                    }
                });
            };
            scope.generatePNG = function () {
                html2canvas(document.getElementById(scope.source), {
                    onrendered: function (canvas) {
                        var a = document.createElement('a');
                        a.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
                        a.download = 'SpotRanking.png';
                        a.click();
                    }
                });
            };
        };
        return directive;
    });
