import { Component, OnInit } from '@angular/core';
import { Product } from './model/product.model';
import { ProductService } from './service/product.service';
import { CartService } from './service/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  products: Product[] = [];
  cartItems: Product[] = [];

  constructor(private productService: ProductService,
    private cartService: CartService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });

    this.cartItems = this.cartService.getCartItems();
  }

  handleAddToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

  getTotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }
}