'use strict';

/**
 * @ngdoc function
 * @name udaciMealsApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the udaciMealsApp
 */

angular.module('udaciMealsApp')
  // inject the service foodFinder into the controler
  // to use the service, the controler need to store a variable , let's call it menu for foodFinder service
  // for every injected services, the
  .controller('MenuCtrl',['foodFinder','orderManager',function(menu , order) {
    var self = this; // vm for  view model

    menu.getMenu().then(function(data){
      self.items = data;
    }, function(reason){
      console.log(reason.responseText);
    });

    // circumvention
    this.items = menu.items;

    this.increment = function(item) {
      item.rating = (((item.rating * 50) + 1)/50).toPrecision(3);
    };

    this.decrement = function(item) {
      item.rating = (((item.rating * 50) - 1)/50).toPrecision(3);
    };

    this.ChooseItem = function(menuCategory,menuItem) {
      order.chooseMenuOption(menuCategory,menuItem); // (breakfast, strawberry-pudding),( )
    };

    this.RemoveItem = function(menuCategory,menuItem) {
      order.removeMenuOption(menuCategory,menuItem);
    };

  }]);
