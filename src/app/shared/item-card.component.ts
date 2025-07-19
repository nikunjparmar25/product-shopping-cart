import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../model/product.model';

@Component({
  selector: 'item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent {
  @Input() item!: Product;
  @Output() addProduct = new EventEmitter<Product>();

  onProductAdd(item: Product): void {
    this.addProduct.emit(item);
  }
}
