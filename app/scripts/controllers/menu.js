'use strict';

/**
 * @ngdoc function
 * @name udaciMealsApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the udaciMealsApp
 */
 /*
angular.module('udaciMealsApp')
  .controller('MenuCtrl', function () {
    this.id = 'strawberry-pudding';
    this.name = 'Strawberry pudding';
    this.img = 'strawberry-pudding.jpg';

    this.rating =5;
  });
*/
angular.module('udaciMealsApp')
  // inject the service foodFinder into the controler
  // to use the service, the controler need to store a variable , let's call it menu for foodFinder service
  // for every injected services, the
  .controller('MenuCtrl',['foodFinder','orderManager',function(menu , order) {
    var vm = this; // vm = view model
    menu.getMenu().then(function(data){
      vm.items = data;
    }, function(reason){
      console.log(reason.responseText);
    });

    this.increment = function(item) {
      item.rating = (((item.rating * 50) + 1)/50).toPrecision(3);
    };

    this.decrement = function(item) {
      item.rating = (((item.rating * 50) - 1)/50).toPrecision(3);
    };

    this.ChooseItem = function(menuCategory,menuItem) {
      // console.log(order.selectedDay, menuCategory,menuItemName);
      order.chooseMenuOption(menuCategory,menuItem); // (breakfast, strawberry-pudding),( )
    };

    this.RemoveItem = function(menuCategory,menuItem) {
      order.removeMenuOption(menuCategory,menuItem);
    };
    /*
      this.xxxx = menu.xxxx;
      this.wwww = order.wwww;

    */

  }]);
