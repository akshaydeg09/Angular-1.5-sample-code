function CatalogService($q, $http) {
  var self = this;
  self.products = [];
  
  this.getProducts = function() {
    // Check if `self.products` has already been populated. Return this if it it the case
    // If not, load data from './products.json'; Save the products to `self.products`
    // Make sure you return a promise an both cases
    console.log(self.products.length);
    
    if(self.products.length >  0){
      var deffered = $q.defer();
      deffered.resolve(self.products);
      return deffered.promise; 
    }else{
      console.log("Getting data from JSON");
      return $http.get('products.json'); //This will return a promise
    }
  };
  
}
CatalogService.$inject = ['$q', '$http'];

angular.module('app')
  .service('catalogService', CatalogService);