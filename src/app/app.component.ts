import { Component } from '@angular/core';

import { CartService } from './services/cart.service';
import { CartComponent } from './components/cart/cart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppModule],
  templateUrl: './app.component.html',
  // Remove or update the styleUrls array
  styleUrls: [],
})
export class AppComponent {
  title = 'online-store';
}
