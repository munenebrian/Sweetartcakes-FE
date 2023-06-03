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
    return this.http.get<Product[]>('https://sweetartcakes-be-production.up.railway.app/weddingcakedetails/' + id);
  }

  getEngagementDetails(id:number): Observable<Product[]> {
    return this.http.get<Product[]>('https://sweetartcakes-be-production.up.railway.app/engagementCakesDetails/' + id);
  }

  getRuracioDetails(id:number): Observable<Product[]> {
    return this.http.get<Product[]>('https://sweetartcakes-be-production.up.railway.app/ruracioCakesDetails/' + id);
  }
}
