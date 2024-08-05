import { Component, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../models/product.models';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  @Input() product!: Product;

  constructor(private cartService: CartService) {}

  //
  // ngOnInit(): void {
  //   this.cartService.cart$.subscribe((products) => {
  //     this.cart = products;
  //     this.totalCost = this.cartService.getTotalCost();
  //   });
  // }
  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
  }
}
