function CartItemCtrl() {
  var self = this;
  
}
CartItemCtrl.$inject = [];

var item = {
  template: `
    <div class="">{{$ctrl.item.label}} &mdash; {{$ctrl.item.cost | currency}} &mdash; Qty: {{$ctrl.item.qty}}</div>
  `,
  bindings: {
    item: '<'
  },
  controller: CartItemCtrl
  
};

angular
  .module('app')
  .component('cartItem', item);