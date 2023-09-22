import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { cart } from '../shared/models/cart';
import { cartItem } from '../shared/models/cartItem';
import { FoodService } from '../service/food/food.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  Cart!: cart;
  quantityOptions: number[] = [1, 2];

  constructor(private cartService: CartService) {
    // let foods = foodService.getAll();
    // cartService.addToCart(foods[1]);
    this.setCart();
  }

  setCart() {
    this.Cart = this.cartService.getCart();
  }

  removeFromCart(CartItem: cartItem) {
    this.cartService.removeFromCart(CartItem.food.id);
    this.setCart();
  }

  changeQuantity(CartItem: cartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(CartItem.food.id, quantity);
    this.setCart();
  }


  ngOnInit(): void {

  }



}
