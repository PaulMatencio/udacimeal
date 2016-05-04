'use strict';

/**
 * @ngdoc function
 * @name udaciMealsApp.controller:OrderCtrl
 * @description
 * # OrderCtrl
 * Controller of the udaciMealsApp
 */
angular.module('udaciMealsApp')
  .controller('OrderCtrl',['orderManager','foodFinder', function (orderManager,menu) {

      this.list = orderManager.getOrders(''); // request data ftom ordermanager service

      this.activeDay = orderManager.getActiveDay();

      this.setActiveDay = function(day) {
        orderManager.setActiveDay(day) ;
      };

  }]);
