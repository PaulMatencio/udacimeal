'use strict';

/**
 * @ngdoc service
 * @name udaciMealsApp.foodFinder
 * @description
 * # foodFinder
 * Service in the udaciMealsApp.
 */
angular.module('udaciMealsApp')
// service(name,contructor)
  .service('foodFinder', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var menuFile = "/menu/menu.json";
    this.getMenu = function() {
      return $.get(menuFile);
    };

    this.items = [
      {
        id :  "chicken-pomegranate-salad",
        name : "Chicken pomegranate salad",
        img : "chicken-pomegranate-salad.jpg",
        calories : 430,
        price: 10,
        rating : 4.2,
        description: "This Chicken  Salad with Pomegranate  is the perfect fresh salad that still incorporates some of fall’s goodies. Olive oil, salt & peeper, and a ton of italian seasoning, so that it almost forms a crust. So flavorful, and it can be added to a variety of salads or cut up for sandwiches."
      },
      {
        id :  "strawberry-pudding",
        name : "Strawberry pudding",
        img : "strawberry-pudding.jpg",
        calories : 200,
        price: 5,
        rating : 4.6,
        description: "This strawberry-pudding is the perfect dessert.  The berry flavor is present, but not overwhelming, and the pudding is extremely creamy and delicious."
      },
      {
        id :  "ham-goatcheese-croissant",
        name : "Ham goatcheese croissant",
        img : "ham-goatcheese-croissant.jpg",
        calories : 690,
        price: 5,
        rating : 3.6,
        description: "toasted croissant goat cheese on five-grain with arugula, frisée, seasonal fruit, walnuts and apple-date vinaigrette"
      }
    ];

    this.getItem = function(id) {
      var menuItemFile = "/menu/" +id + '.json';
      return $.get(menuItemFile);
    };
    /*
    this["ham-goatcheese-croissant"] = {
      "id" :  "ham-goatcheese-croissant",
      "name" : "Ham goatcheese croissant",
      "img" : "ham-goatcheese-croissant.jpg",
      "calories" : 690,
      "price": 5,
      "rating" : 3.6,
      "description": "toasted croissant goat cheese on five-grain with arugula, frisée, seasonal fruit, walnuts and apple",
      "reviews": [
        "delcious. I love it",
        "very good, I recommend it",
        "not bad"
      ]
    };
    */


  });
