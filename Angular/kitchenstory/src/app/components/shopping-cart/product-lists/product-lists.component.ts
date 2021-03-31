import { Product } from './../../../models/product';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-lists',
  templateUrl: './product-lists.component.html',
  styleUrls: ['./product-lists.component.css']
})
export class ProductListsComponent implements OnInit {

  productList : Product[] =[];
  constructor(private productService : ProductService) { 
   
  }

  ngOnInit(): void {
   this.productList=this.productService.getProducts();
  }

}
