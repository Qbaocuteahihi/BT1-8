import { Component, Input } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { Product } from '../models/product.models';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product!: Product;

  constructor(public cartService: CartService) {}

  addToCart() {
    this.cartService.addToCart(this.product);
  }
}
