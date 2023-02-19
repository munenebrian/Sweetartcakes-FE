import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class TopdealsService {

  constructor(private http: HttpClient) {}

  getTopDeals() {
    return this.http.get<Product[]>('https://sweetartcakes-be-production.up.railway.app/api_products/').pipe(
      map(products => products.slice(0, 5)),
    );
  }
}
