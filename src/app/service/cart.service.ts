import { Product } from '../model/product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Product[] = [];

  addToCart(product: Product) {
    this.items.push(product);
  }

  getCartItems(): Product[] {
    return this.items;
  }
}
