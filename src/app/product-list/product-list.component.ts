import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {Product} from '../model/product.model';
import {ProductService} from '../product.service';
import {ProductHttpService} from '../product-http.service';
import {MessengerService} from '../messenger.service';

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

  constructor(private productService: ProductHttpService,
              private messenger: MessengerService
  ) {}

  ngOnInit(): void {
    this.fetchData();
    this.messenger.retrieveEmitter().subscribe( () =>
      this.fetchData()
    )
  }

  private fetchData() {
    this.productService.findAll().subscribe(res => this.products = res)
  }

  /**
   * @example: desactivated but shows response to the output
   * @param prodSelected: the product sent by the children (ProductComponent)
   */
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
