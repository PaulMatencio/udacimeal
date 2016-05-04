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
        breakfast: {},
        lunch: {},
        dinner: {},
        calories: 0,
        price: 0
      },
      Tuesday: {
        breakfast: {},
        lunch: {},
        dinner: {},
        calories: 0,
        price: 0
      },
      Wednesday: {
        breakfast: {},
        lunch: {},
        dinner: {},
        calories: 0,
        price: 0
      },
      Thursday: {
        breakfast: {},
        lunch: {},
        dinner: {},
        calories: 0,
        price: 0
      },
      Friday: {
        breakfast: {},
        lunch: {},
        dinner: {},
        calories: 0,
        price: 0
      },
      Saturday: {
        breakfast: {},
        lunch: {},
        dinner: {},
        calories: 0,
        price: 0
      }


    };



    this.getActiveDay = function(){
      return this.selectedDay;
    };

    this.setActiveDay = function(day) {
      this.selectedDay = day;
    };

    this.chooseMenuOption = function(menuCategory, menuitem) {

      if ( typeof menuCategory !== 'undefined') {
        var menuCalory = orderSelection[this.selectedDay][menuCategory].calories;

        if (typeof menuCalory !== 'undefined') {
          orderSelection[this.selectedDay].calories -= menuCalory ;
        }
        orderSelection[this.selectedDay][menuCategory].name     = menuitem.name;
        orderSelection[this.selectedDay][menuCategory].calories = menuitem.calories;
        orderSelection[this.selectedDay][menuCategory].price = menuitem.price;
        orderSelection[this.selectedDay].calories   +=   menuitem.calories;
        orderSelection[this.selectedDay].price   +=  menuitem.price;
        console.log(orderSelection[this.selectedDay]);
      }
    };

    this.removeMenuOption = function(menuCategory,menuitem) {
      if (orderSelection[this.selectedDay][menuCategory].name === menuitem.name) {
        orderSelection[this.selectedDay][menuCategory]= {};
        if ( orderSelection[this.selectedDay].calories > 0) {
          orderSelection[this.selectedDay].calories -= menuitem.calories;
          orderSelection[this.selectedDay].price -= menuitem.price;
        }
      }
    };

    this.getOrders = function(){
      return orderSelection;
    };

  });
