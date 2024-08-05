import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductListComponent,
    ProductItemComponent,
    CartComponent, // Declare CartComponent here only once
    CartItemComponent,
  ],
  imports: [BrowserModule],
  providers: [CartService],
  bootstrap: [AppComponent],
  exports: [NavbarComponent],
})
export class AppModule {}
