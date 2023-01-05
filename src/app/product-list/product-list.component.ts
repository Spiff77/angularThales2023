import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {Product} from '../model/product.model';
import {ProductService} from '../product.service';
import {ProductHttpService} from '../product-http.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{

  productSelected: Product|undefined
  filterStr = ''
  curentTimeout!: NodeJS.Timeout

  products: Product[] = []

  ngOnInit(): void {
    this.productService.findAll().subscribe(res => this.products = res)
  }

  constructor(private productService: ProductHttpService) {}

  getSelectedProduct(prodSelected: Product) {
    this.productSelected = prodSelected
    if(this.curentTimeout){
      window.clearTimeout(this.curentTimeout);
    }
    this.curentTimeout =  setTimeout(() => this.productSelected = undefined, 3000)
  }

  productsFiltered(): Product[] {
    return this.products.filter(p => p.name.toLowerCase().search(this.filterStr.toLowerCase()) !== -1)
  }

}
