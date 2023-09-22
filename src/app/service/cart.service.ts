import { Injectable } from '@angular/core';
import { cart } from '../shared/models/cart';
import { Foods } from '../shared/models/food';
import { cartItem } from '../shared/models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private Cart: cart = new cart();

  // ADD to Cart
  addToCart(food: Foods): void {
    let CartItem = this.Cart.items.find(item => item.food.id === food.id);
    if (CartItem) {
      this.changeQuantity(food.id, CartItem.quantity + 1);
      return;
    }
    this.Cart.items.push(new cartItem(food));
  }

  // Remove from Cart
  removeFromCart(foodId: number): void {
    this.Cart.items = this.Cart.items.filter(item => item.food.id != foodId)

  }

  // Get from Cart
  getCart(): cart {
    return this.Cart;
  }




  changeQuantity(quantity: number, foodId: number) {
    let cartItem = this.Cart.items.find(item => item.food.id === foodId);
    if (!cartItem) return;
    cartItem.quantity = quantity;
  }

}
