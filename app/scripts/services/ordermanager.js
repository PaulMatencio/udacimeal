'use strict';

/**
 * @ngdoc service
 * @name udaciMealsApp.orderManager
 * @description
 * # orderManager
 * Service in the udaciMealsApp.
 */
angular.module('udaciMealsApp')
  .service('orderManager', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.selectedDay= 'Monday';


    var orderSelection = {
      Monday: {
        breakfast: '',
        lunch: '',
        dinner: '',
        calories: 0
      },
      Tuesday: {
        breakfast: '',
        lunch: '',
        dinner: '',
        calories: 0
      },
      Wednesday: {
        breakfast: '',
        lunch: '',
        dinner: '',
        calories: 0
      },
      Thursday: {
        breakfast: '',
        lunch: '',
        dinner: '',
        calories: 0
      },
      Friday: {
        breakfast: '',
        lunch: '',
        dinner: '',
        calories: 0
      }
    };


    this.getActiveDay = function(){
      return this.selectedDay;
    };

    this.setActiveDay = function(day) {
      console.log(day);
      this.selectedDay = day;
    };

    this.chooseMenuOption = function(menuCategory, menuitem) {
      if ( typeof menuCategory !== 'undefined') {
        orderSelection[this.selectedDay][menuCategory] = menuitem.name;
        orderSelection[this.selectedDay].calories += menuitem.calories;
      };
    };

    this.removeMenuOption = function(menuCategory,menuitem) {
      if (orderSelection[this.selectedDay][menuCategory] === menuitem.name) {
        orderSelection[this.selectedDay][menuCategory]= '';
        if ( orderSelection[this.selectedDay].calories > 0) {
          orderSelection[this.selectedDay].calories -= menuitem.calories;
        }
      }
    };

    this.getOrders = function(){
      return orderSelection;
    };

  });
