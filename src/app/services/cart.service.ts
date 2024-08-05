import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../components/models/product.models';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart = new BehaviorSubject<Product[]>([]);
  cart$ = this.cart.asObservable();

  addToCart(product: any) {
    let findIndex = this.cart.findIndex((element) => {
      return element.id === product.id;
    });

    if (findIndex !== -1) {
      if (product.inStock <= 0) {
        return;
      } else {
        this.cart[findIndex].quantity += 1;
        product.inStock--;
      }
    } else {
      if (product.inStock > 0) {
        this.cart.push({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        });
        product.inStock--;
      }
    }
  }

  removeFromCart(index: Product) {
    const product = this.cart[index];
    if (product.quantity > 1) {
      product.quantity--;
    } else {
      this.cart.splice(index, 1);
    }
  }

  getCart() {
    return this.cart;
  }

  getTotalPrice(): number {
    return this.cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0,
    );
  }
}
