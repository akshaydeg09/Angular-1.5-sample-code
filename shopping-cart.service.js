function ShoppingCartService() {
  var self = this;
  self.cartItems = [];
  
  this.addItem = function(item) {
    var existingItem = _.find(self.cartItems, {id: item.id});
  
    if(existingItem) {
      existingItem.qty++;
    }else {
      item.qty = 1;
      self.cartItems.push(item);
    }
  };
  
  this.removeItem = function(item) {
   var existingItem = _.find(self.cartItems, {id: item.id});
     console.log("item quanitity"+existingItem.qty);
    if(existingItem.qty > 1) {
       console.log("reduce the count");
      existingItem.qty -= 1;
      return;
    }
    console.log("removing item from cart");
    var index = self.cartItems.indexOf(existingItem);
    self.cartItems.splice(index,1);
  };
  
}
ShoppingCartService.$inject = [];

angular.module('app')
  .service('shoppingCartService', ShoppingCartService);