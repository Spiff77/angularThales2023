import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input()
  product!: Product;

  @Output()
  outProduct = new EventEmitter<Product>();

  @HostListener('click')
  sendDataToParent(){
    this.outProduct.emit(this.product)
  }
}
