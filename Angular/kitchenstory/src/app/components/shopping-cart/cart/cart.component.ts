import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems=[
    {id:1,productId:1,productName:'Test 1',qty:4,price:100},
    {id:2,productId:3,productName:'Test 2',qty:4,price:50},
    {id:3,productId:2,productName:'Test 3',qty:4,price:150},
    {id:4,productId:4,productName:'Test 4',qty:4,price:200}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
