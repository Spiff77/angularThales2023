import {AfterViewChecked, AfterViewInit, Component} from '@angular/core';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {


  productSelected: Product|undefined
  products: Product[] = [{
    id: 10,
    name: 'Igorrr',
    description: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dignissimos nostrum quasi quisquam ratione vitae! Alias atque consequuntur dicta, facilis fugit, illum magnam, minus obcaecati perspiciatis placeat qui tempore voluptate.',
    promo: .05,
    price: 15,
    category: 'CD',
    active: true,
  }, {
    id: 11,
    name: 'Motorhead',
    description: '  Ipsum Lorem dolor sit amet, consectetur adipisicing elit. Commodi dignissimos nostrum quasi quisquam ratione vitae! Alias atque consequuntur dicta, facilis fugit, illum magnam, minus obcaecati perspiciatis placeat qui tempore voluptate.',
    promo: .05,
    price: 12,
    category: 'CD',
    active: true,
  }]

  curentTimeout!: NodeJS.Timeout
  getSelectedProduct(prodSelected: Product) {
    this.productSelected = prodSelected
    if(this.curentTimeout){
      window.clearTimeout(this.curentTimeout);
    }
    this.curentTimeout =  setTimeout(() => this.productSelected = undefined, 3000)
  }
}
