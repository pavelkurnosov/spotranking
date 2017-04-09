'use strict';

angular
    .module('app')
    .directive('pageLocator', function () {
        var directive = {};

        directive.restrict = 'E';

        var html = '<div id="positions">';
        html += '<table cellpadding="0" cellspacing="0" class="position_table" id="position_table">';
        html += '<tr><td data="a1"></td><td data="a2"></td><td data="a3"></td><td data="a4"></td><td data="a5"></td><td data="a6"></td></tr>';
        html += '<tr><td data="b1"></td><td data="b2"></td><td data="b3"></td><td data="b4"></td><td data="b5"></td><td data="b6"></td></tr>';
        html += '<tr><td data="c1"></td><td data="c2"></td><td data="c3"></td><td data="c4"></td><td data="c5"></td><td data="c6"></td></tr>';
        html += '<tr><td data="d1"></td><td data="d2"></td><td data="d3"></td><td data="d4"></td><td data="d5"></td><td data="d6"></td></tr>';
        html += '<tr><td data="e1"></td><td data="e2"></td><td data="e3"></td><td data="e4"></td><td data="e5"></td><td data="e6"></td></tr>';
        html += '<tr><td data="f1"></td><td data="f2"></td><td data="f3"></td><td data="f4"></td><td data="f5"></td><td data="f6"></td></tr>';
        html += '</table>';
        html += '<table cellpadding="0" cellspacing="0" class="position_table" style="float: left; display:none" id="position_table_2">';
        html += '<tr><td data="g1"></td><td data="g2"></td><td data="g3"></td><td data="g4"></td><td data="g5"></td><td data="g6"></td></tr>';
        html += '<tr><td data="h1"></td><td data="h2"></td><td data="h3"></td><td data="h4"></td><td data="h5"></td><td data="h6"></td></tr>';
        html += '<tr><td data="k1"></td><td data="k2"></td><td data="k3"></td><td data="k4"></td><td data="k5"></td><td data="k6"></td></tr>';
        html += '<tr><td data="l1"></td><td data="l2"></td><td data="l3"></td><td data="l4"></td><td data="l5"></td><td data="l6"></td></tr>';
        html += '<tr><td data="m1"></td><td data="m2"></td><td data="m3"></td><td data="m4"></td><td data="m5"></td><td data="m6"></td></tr>';
        html += '<tr><td data="n1"></td><td data="n2"></td><td data="n3"></td><td data="n4"></td><td data="n5"></td><td data="n6"></td></tr>';
        html += '</table>';
        html += '</div>';
        html += '<div><label>Show Double Page <input type="checkbox" name="chk" id="double_chk" /></label>';
        html += '</div>';
        html += '<input type="hidden" id="areas" name="position" value=""/>';
        directive.template = html;

        directive.scope = {
            class: "@"
        };

        directive.link = function (scope, element, attrs) {
            $(function () {
                var isMouseDown = false,
                    isHighlighted;
                $(".position_table td", element).mousedown(function () {
                    isMouseDown = true;
                    $(this).toggleClass("highlighted");
                    isHighlighted = $(this).hasClass("highlighted");
                    return false; // prevent text selection
                }).mouseover(function () {
                    if (isMouseDown) {
                        $(this).toggleClass("highlighted", isHighlighted);
                    }
                }).bind("selectstart", function () {
                    return false;
                });

                $(document).mouseup(function () {
                    isMouseDown = false;

                    var ids = [];

                    $('td.highlighted', element).each(function () {
                        ids.push($(this).attr('data'));
                    });
                    $("#areas", element).val(ids.toString());
                    // alert($("#areas").val());
                });
            });

            $(document).ready(function () {
                $('#double_chk', element).change(function () {
                    if ($(this).is(":checked")) {
                        $('#position_table_2', element).show();
                    } else {
                        $('#position_table_2', element).hide();
                    }
                });
            });
        };
        return directive;
    });
