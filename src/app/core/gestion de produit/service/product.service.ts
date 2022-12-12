import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
url='http://localhost:3000/products/';
  constructor(private http: HttpClient) { }

  addProduct(data: any) {
    return this.http.post(this.url, data)
  }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }
  removeProduct(id: any) {
    return this.http.delete(this.url + id)
  }
  updateProduct(id: any,data:any) {
    return this.http.put(this.url + id,data)
  }

  fetchProductById(id:any):Observable<Product> {
return this.http.get<Product>(this.url + id)
  }
}
