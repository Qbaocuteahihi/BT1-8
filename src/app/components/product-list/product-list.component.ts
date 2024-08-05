import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.models';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Gấu Bông Capybara Siêu Cute',
      price: 150000,
      quantity: 20,
      imageUrl: 'assets/Capy.jpg',
    },
    {
      id: 2,
      name: 'Snack Siêu Ngon',
      price: 7000,
      quantity: 120,
      imageUrl: 'assets/snack.jpg',
    },
    {
      id: 3,
      name: 'Mì Hảo Hảo Siêu Cứu Đói',
      price: 120000,
      quantity: 30,
      imageUrl: 'assets/mihaohao.jpg',
    },
  ];
}
