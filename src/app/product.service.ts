import { Injectable } from '@angular/core';
import {Product} from './model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products = [
    {
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
    }
  ]

  constructor() { }

  findAll(): Product[]{
    return this.products
  }

  add(product: Product): void{
    this.products.push(product)
  }

  remove(id: number){
    this.products = this.products.filter(p => p.id !== id)
  }
}
