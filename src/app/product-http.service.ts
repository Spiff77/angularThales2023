import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './model/product.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {

  url = 'http://localhost:8080/learn/api/products'

  constructor(private http: HttpClient) { }

  findAll(): Observable<Product[]>{
    return this.http.get<Product[]>(this.url)
  }

  findOne(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.url}/${id}`)
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`)
  }
}
