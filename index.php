<?php
header("Content-Type: text/html");
header("Expires: 0");
header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
header("Cache-Control: no-store, no-cache, must-revalidate");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
?>
<!DOCTYPE html>
<html lang="en-us" class="no-js">
<head>

    <meta charset="utf-8">

    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate"/>
    <meta http-equiv="Pragma" content="no-cache"/>
    <meta http-equiv="Expires" content="0"/>

    <title>Spot Ranking</title>
    <meta name="description" content="">
    <meta name="author" content="">

    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

    <!-- #CSS Links -->
    <!-- Basic Styles -->
    <link rel="stylesheet" type="text/css" media="screen" href="styles/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" media="screen" href="styles/css/font-awesome.min.css">

    <!-- SmartAdmin Styles : Caution! DO NOT change the order -->
    <link rel="stylesheet" type="text/css" media="screen" href="styles/css/smartadmin-production-plugins.min.css">
    <link rel="stylesheet" type="text/css" media="screen" href="styles/css/smartadmin-production.min.css">
    <link rel="stylesheet" type="text/css" media="screen" href="styles/css/smartadmin-skins.min.css">

    <link rel="stylesheet" type="text/css" media="screen" href="styles/css/smartadmin-angular.css">

    <!-- SmartAdmin RTL Support (Not using RTL? Disable the CSS below to save bandwidth) -->
    <link rel="stylesheet" type="text/css" media="screen" href="styles/css/smartadmin-rtl.min.css">

    <link rel="stylesheet" type="text/css" media="screen" href="styles/css/ng-tags-input-custom.css">
    <link rel="stylesheet" type="text/css" media="screen" href="styles/css/ng-tags-input.min.css">

    <!-- Additional libraries -->
    <link rel="stylesheet" type="text/css" media="screen" href="styles/css/ng-tag-cloud.css">

    <!-- Demo purpose only: goes with demo.js, you can delete this css when designing your own WebApp -->
    <link rel="stylesheet" type="text/css" media="screen" href="styles/css/demo.min.css">

    <!-- For bootstrap daterangepicker -->
    <link rel="stylesheet" type="text/css" media="screen" href="styles/css/daterangepicker-bs3.css">

    <!-- #FAVICONS -->
    <link rel="shortcut icon" href="styles/img/favicon/favicon.ico" type="image/x-icon">

    <!-- #GOOGLE FONT -->
    <!-- 	<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,300,400,700"> -->

    <!-- #APP SCREEN / ICONS -->
    <!-- Specifying a Webpage Icon for Web Clip
    Ref: https://developer.apple.com/library/ios/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html -->
    <link rel="apple-touch-icon" href="styles/img/splash/sptouch-icon-iphone.png">
    <link rel="apple-touch-icon" sizes="76x76" href="styles/img/splash/touch-icon-ipad.png">
    <link rel="apple-touch-icon" sizes="120x120" href="styles/img/splash/touch-icon-iphone-retina.png">
    <link rel="apple-touch-icon" sizes="152x152" href="styles/img/splash/touch-icon-ipad-retina.png">

    <!-- iOS web-app metas : hides Safari UI Components and Changes Status Bar Appearance -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">

    <!-- Startup image for web apps -->
    <link rel="apple-touch-startup-image" href="styles/img/splash/ipad-landscape.png" media="screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:landscape)">
    <link rel="apple-touch-startup-image" href="styles/img/splash/ipad-portrait.png" media="screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:portrait)">
    <link rel="apple-touch-startup-image" href="styles/img/splash/iphone.png" media="screen and (max-device-width: 320px)">

    <link rel="stylesheet" href="https://cdn.datatables.net/buttons/1.2.2/css/buttons.dataTables.min.css">

    <!-- We recommend you use "your_style.css" to override SmartAdmin
    specific styles this will also ensure you retrain your customization with each SmartAdmin update. -->
    <link rel="stylesheet" type="text/css" media="screen" href="styles/css/your_style.css">
</head>
<!--

TABLE OF CONTENTS.

Use search to find needed section.

===================================================================

|  01. #CSS Links                |  all CSS links and file paths  |
|  02. #FAVICONS                 |  Favicon links and file paths  |
|  03. #GOOGLE FONT              |  Google font link              |
|  04. #APP SCREEN / ICONS       |  app icons, screen backdrops   |
|  05. #BODY                     |  body tag                      |
|  06. #HEADER                   |  header tag                    |

===================================================================

-->

<!-- #BODY -->
<!-- Possible Classes (to hardcode the classes you must disable the __ module)

* 'smart-style-{SKIN#}'
* 'smart-rtl'         - Switch theme mode to RTL
* 'menu-on-top'       - Switch to top navigation (no DOM change required)
* 'no-menu'           - Hides the menu completely
* 'hidden-menu'       - Hides the main menu but still accessable by hovering over left edge
* 'fixed-header'      - Fixes the header
* 'fixed-navigation'  - Fixes the main menu
* 'fixed-ribbon'      - Fixes breadcrumb
* 'fixed-page-footer' - Fixes footer
* 'container'         - boxed layout mode (non-responsive: will not work with fixed-navigation & fixed-ribbon)

Possible attributes

* 'data-smart-device-detect' - Detects if mobile or desktop, adds a class to body tag
* 'data-smart-fast-click'    - Mobile click events
* 'data-smart-layout'        - Mobile view event listener
* 'data-smart-page-title'    - Page title

-->

<body data-smart-device-detect
      data-smart-fast-click
      data-smart-layout
      data-smart-page-title="Spot Ranking" ng-controller="MainController as vm" class="minified">

<!-- ui-view container -->

<div data-ui-view="root" data-autoscroll="false"></div>

<!--[if lt IE 7]>
<p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
<![endif]-->

<!--[if lt IE 9]>
<script src="plugin/es5-shim/es5-shim.js"></script>
<script src="plugin/json3/lib/json3.min.js"></script>
<![endif]-->

<!-- Use for production after building the project with grunt -->
<script src="build/vendor.js"></script>
<script src="https://cdn.datatables.net/buttons/1.2.2/js/dataTables.buttons.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.2.2/js/buttons.colVis.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.2.2/js/buttons.flash.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.2.2/js/buttons.html5.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.2.2/js/buttons.print.min.js"></script>
<script src="build/app.js"></script>


</body>

</html>
