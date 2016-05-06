'use strict';

/**
 * @ngdoc overview
 * @name udaciMealsApp
 * @description
 * # udaciMealsApp
 *
 * Main module of the application.
 */
angular
  .module('udaciMealsApp', ['ui.router'])
  //https://github.com/angular-ui/ui-router/wiki/Quick-Reference#configure-your-states-in-your-modules-config-method
  .config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    // http://angular-ui.github.io/ui-router/
    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise("/");

     // Now set up the states
    $stateProvider
    .state('home', {
      // This will get automatically plugged into the unnamed ui-view
      // of the parent state template. Since this is a top level state,
      // its parent state template is index.html.
      url: "/",
    /*  Three ways to set up your templates. Only use one per state (or view, see below)!
        template String HTML content, or function that returns an HTML string
        templateUrl String URL path to template file OR Function, returns URL path string
        templateProvider Function, returns HTML content string */
      templateUrl: "views/menu.html",
    /*  A controller paired to the state
        controller Function OR name as String
        controllerProvider Function (injectable), returns the actual controller function or string.
    */
      controller: "MenuCtrl as menu"
    })

    .state('item', {
      url: "/item/:id",
      templateUrl: "views/item.html",
      controller: "ItemCtrl as item"
    })
    .state("item.description", {
      url: "/description",
      templateUrl: "views/item-description.html"
      // for nested view you don't need a controller
    })
    .state("item.nutrition", {
      url: "/nutrition",
      templateUrl: "views/item-nutrition.html"
      // for nested view you don't need a controller
    })
    .state("item.reviews", {
      url: "/reviews",
      templateUrl: "views/item-reviews.html"
    });

  }]);
