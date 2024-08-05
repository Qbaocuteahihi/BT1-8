import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product.models';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<Product>();

  removeFromCart() {
    this.remove.emit(this.product);
  }
}
