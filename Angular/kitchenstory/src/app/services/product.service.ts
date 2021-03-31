import { Product } from './../models/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products : Product[] =[
    new Product(1,'Product 1','This is the product 1',100,"https://5.imimg.com/data5/TO/YC/PQ/SELLER-87918828/15gm-oregano-pizza-masala-powder-250x250.jpg"),
    new Product(2,'Product 2','This is the product 1',150,"data:image/jpeg;base64,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"),
    new Product(3,'Product 3','This is the product 1',199,"https://cdn.shopify.com/s/files/1/0004/9325/6762/products/safak_corn_b127e47f-bef3-4494-8e25-98037c08b287_300x300.jpg?v=1530175916"),
    new Product(4,'Product 4','This is the product 1',200,"https://d37ky63zmmmzfj.cloudfront.net/production/itemimages/grocery___staples/jams___sauces/chings_schezwansauce_250gm.jpg"),
    new Product(5,'Product 5','This is the product 1',230,"https://5.imimg.com/data5/BZ/EW/GL/SELLER-101546306/tata-1kg-iodized-salt-500x500.jpg"),
    new Product(6,'Product 6','This is the product 1',344,"https://5.imimg.com/data5/YD/DJ/MY-70422967/skyplus-sugar-500x500.jpg"),

  ]
  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }
}
