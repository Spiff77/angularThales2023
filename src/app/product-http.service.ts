import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './model/product.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Product[]>{
    return this.http.get()
  }
}
