function ShoppingCartCtrl($scope, shoppingCartService) {
  var self = this;
  
  
  self.cartItems = shoppingCartService.cartItems;    
  
  
  $scope.$on('addToCart', function(event, item) {
    shoppingCartService.addItem(item);
  });
  
  $scope.removeItem = function(item) {
    shoppingCartService.removeItem(item);
  };
}
ShoppingCartCtrl.$inject = ['$scope', 'shoppingCartService'];

var shoppingCart = {
  template: `
    <h1>Shopping Cart</h1>
    <ul class="list-unstyled">
      <li ng-repeat='item in $ctrl.cartItems' class="addPadding">
        <div><strong>{{item.label}}</strong> @{{item.cost | currency}} &times; {{item.qty}}: {{item.cost * item.qty | currency}}</div>
         <div>
        <button type="button" class="btn-danger" ng-click="removeItem(item)">Remove from cart</button>
        </div>
      </li>
    </ul>
  `,
  controller: ShoppingCartCtrl
};

angular
  .module('app')
  .component('shoppingCart', shoppingCart);