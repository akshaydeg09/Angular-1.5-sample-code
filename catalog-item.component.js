function CatalogItemCtrl($rootScope) {
  var self = this;
  
  self.addToCart = function(item) {
    $rootScope.$broadcast('addToCart', item);
  };
}
CatalogItemCtrl.$inject = ['$rootScope'];

var item = {
  template: `
    <div><strong>{{$ctrl.item.label}} </strong>&mdash; {{$ctrl.item.cost | currency}}</div>
    <div >
      <button type="button" class="btn-primary" ng-click="$ctrl.addToCart($ctrl.item)">Add to cart</button>
    </div>
  `,
  bindings: {
    item: '<'
  },
  controller: CatalogItemCtrl
  
};

angular
  .module('app')
  .component('catalogItem', item);