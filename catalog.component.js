function CatalogCtrl(catalogService) {
  var self = this;
  self.$onInit = function() {
    catalogService.getProducts().then(function(products) {
      self.products = products.data;  
    });
  };
}
CatalogCtrl.$inject = ['catalogService'];

var catalog = {
  template: `
    <h1>Catalog</h1>
    <ul class="list-unstyled">
      <li ng-repeat='item in $ctrl.products' class="addPadding">
        <catalog-item item='item'></catalog-item>
      </li>
    </ul>
  `,
  controller: CatalogCtrl
};

angular
  .module('app')
  .component('catalog', catalog);