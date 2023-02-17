import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductdetailsService {

  id:number = 0;

  constructor(private http:HttpClient) { }

  getProductDetails(id:number): Observable<Product[]> {
    return this.http.get<Product[]>('https://bonjoebe-api-production.up.railway.app/getProductDetails/' + id);
  }
}
