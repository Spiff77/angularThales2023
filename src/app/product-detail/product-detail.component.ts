import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../model/product.model';
import {ProductService} from '../product.service';
import {ProductHttpService} from '../product-http.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{

  product!: Product

  constructor(private route: ActivatedRoute,
              private productHttpService: ProductHttpService,
              private router: Router) {
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
    this.productHttpService.findOne(Number(id)).subscribe(prod => this.product = prod)
  }

  deleteProduct() {
    this.productHttpService.delete(this.product.id)
      .subscribe(v => this.router.navigateByUrl('/products'))
  }
}
/*
ex:
 this.productHttpService.delete(id).subscribe(v => // redirection via router.navigate)

 */
