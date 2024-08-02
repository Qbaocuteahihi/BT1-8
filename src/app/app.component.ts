import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Chú ý đổi từ styleUrl sang styleUrls
})
export class AppComponent {
  title = 'first_project';

  products = [
    {
      id: 1,
      name: 'Gấu Bông Capybara Siêu Cute',
      price: 150000,
      inStock: 20,
      image: 'assets/Capy.jpg',
    },
    {
      id: 2,
      name: 'Nack Siêu Ngon',
      price: 7000,
      inStock: 120,
      image: 'assets/snack.jpg',
    },
    {
      id: 3,
      name: 'Mì Hảo Hảo Siêu Cứu Đói',
      price: 120000,
      inStock: 30,
      image: 'assets/mihaohao.jpg',
    },
  ];

  cart: any[] = [];

  addToCart(index: number) {
    let findIndex = this.cart.findIndex((element) => {
      return element.id === this.products[index].id;
    }); // Đi tìm trong giỏ hàng có tồn tại sp mà mình muốn thêm hay không

    if (findIndex !== -1) {
      // Nếu tồn tại (index != -1)
      if (this.products[index].inStock <= 0) {
        return;
      } else {
        this.cart[findIndex].quantity += 1;
        this.products[index].inStock--;
        // Tăng số lượng lên 1
      }
    } else {
      // Nếu không tồn tại
      if (this.products[index].inStock > 0) {
        // Thêm sp mới đó vào
        this.cart.push({
          id: this.products[index].id,
          name: this.products[index].name,
          price: this.products[index].price,
          quantity: 1,
        });
        this.products[index].inStock--;
      }
    }
    console.log(this.cart);
  }
  removeFromCart(index: number) {
    const product = this.cart[index];
    const productInStore = this.products.find((p) => p.id === product.id);

    if (product.quantity > 1) {
      product.quantity--;
    } else {
      this.cart.splice(index, 1);
    }

    if (productInStore) {
      productInStore.inStock++;
    }
  }

  getTotalPrice(): number {
    return this.cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }
}
