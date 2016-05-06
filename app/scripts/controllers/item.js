'use strict';

/**
 * @ngdoc function
 * @name udaciMealsApp.controller:ItemctrlCtrl
 * @description
 * # ItemctrlCtrl
 * Controller of the udaciMealsApp
 */

// http://www.codelord.net/2015/06/02/angularjs-pitfalls-using-ui-routers-resolve/
angular.module('udaciMealsApp')
  .controller('ItemCtrl', ['$stateParams','foodFinder',function($stateParams, foodFinder)  {
    var self = this;
    foodFinder.getItem($stateParams.id).then(function(data){
      self.data = data;
    });
    this.data = foodFinder[$stateParams.id];
  }]);
