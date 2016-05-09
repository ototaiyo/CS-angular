(function () {
  var app = angular.module('store', [ 'store-directives' ]);

  app.controller('StoreController', [ '$http', function ($http) {
    var store      = this;
    store.products = [];

    // var result = JSON.stringify(gems);
    // console.log(result);

    $http.get('resources/products2.json').success(function (data) {
      store.products = data;
    });
  } ]);

  /*  app.controller('StoreController', function () {
   this.products = gems;
   });*/

  app.controller('ReviewController', function () {

    this.review = {};

    this.addReview = function (product) {
      product.reviews.push(this.review);
      this.review = {};
    };

  });

  // $http({method: 'GET', url: 'resources/products.json'});
  // $http.get('resources/products.json', {apiKey: 'myApiKey'});
  // //Additional $http functionality
  // $http.post('resources/products.json', {param: 'value'});
  // $http.delete('resources/products.json');
  // // ...or any other HTTP method by using a config object
  // $http({method: 'OPTIONS', url: 'resources/products.json'});
  // $http({method: 'PATCH', url: 'resources/products.json'});
  // $http({method: 'TRACE', url: 'resources/products.json'});

  // .succes()
  // .error()
  // app.controller('SomeController', [ '$http', '$log', function ($http, $log) {
  //   this.products = gems;
  // } ]);

  var gems = [
    {
      name:        'Azurite',
      description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
      shine:       8,
      price:       110.50,
      rarity:      7,
      color:       '#CCC',
      faces:       14,
      images:      [
        "images/gem-02.gif",
        "images/gem-05.gif",
        "images/gem-09.gif"
      ],
      reviews:     [ {
        stars:  5,
        body:   "I love this gem!",
        author: "joe@example.org"
      }, {
        stars:  1,
        body:   "This gem sucks.",
        author: "tim@example.org"
      } ]
    }, {
      name:        'Bloodstone',
      description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
      shine:       9,
      price:       22.90,
      rarity:      6,
      color:       '#EEE',
      faces:       12,
      images:      [
        "images/gem-01.gif",
        "images/gem-03.gif",
        "images/gem-04.gif"
      ],
      reviews:     []
    }, {
      name:        'Zircon',
      description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
      shine:       70,
      price:       1100,
      rarity:      2,
      color:       '#000',
      faces:       6,
      images:      [
        "images/gem-06.gif",
        "images/gem-07.gif",
        "images/gem-08.gif"
      ],
      reviews:     [ {
        stars:  1,
        body:   "This gem is WAY too expensive for its rarity value.",
        author: "turtleguyy@example.org"
      }, {
        stars:  1,
        body:   "BBW: High Shine != High Quality.",
        author: "LouisW407@example.org"
      }, {
        stars:  1,
        body:   "Don't waste your rubles!",
        author: "nat@example.org"
      } ]
    }
  ];
})();
