# What is this?
This is a simple code which shows Add to cart and remove to cart functionality in E-commerce website
using AngularJs 1.5.x

Description :
  The `getProducts` methods in _catalog.service.js_ does the following:
      - The method returns a promise
      
      - If `self.products` is already populated then dont disturb it if not ,
        - Data is loaded from `'./products.json'` using `$http`.
        - If it is populated, the value is returned (It still should return promise!)

  
  - Add a functionality to delete products from the shopping cart
      - If an item has been added more than once, the "remove button" will remove items one at a time
      - When an item quantity is brought down to '0',  line will be removed from the shopping display

      - Note : If you want to view this plunkr please use this link

      - https://plnkr.co/edit/ncoEOBXCAX3O1hhZpxCo?p=preview



