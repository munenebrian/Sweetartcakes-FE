import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeWeddingService {

  constructor(private http: HttpClient) {}

  getFiveWeddingCakes() {
    return this.http.get<Product[]>('https://sweetartcakes-be-production.up.railway.app/weddingcakes/').pipe(
      map(products => this.getRandomProducts(products, 5))
    );
  }

  getFiveCorporateCakes() {
    return this.http.get<Product[]>('https://sweetartcakes-be-production.up.railway.app/coporateCakes/').pipe(
      map(products => this.getRandomProducts(products, 5))
    );
  }

  getFiveAnniversaryCakes() {
    return this.http.get<Product[]>('https://sweetartcakes-be-production.up.railway.app/anniversaryCakes/').pipe(
      map(products => this.getRandomProducts(products, 5))
    );
  }

  getFiveBirthdayCakes() {
    return this.http.get<Product[]>('https://sweetartcakes-be-production.up.railway.app/birthdaycakes/').pipe(
      map(products => this.getRandomProducts(products, 5))
    );
  }

  getRandomProducts(products: Product[], count: number): Product[] {
    const randomProducts: Product[] = [];
    const maxIndex = products.length - 1;
  
    while (randomProducts.length < count) {
      const randomIndex = Math.floor(Math.random() * maxIndex);
      const product = products[randomIndex];
      if (!randomProducts.includes(product)) {
        randomProducts.push(product);
      }
    }
  
    return randomProducts;
  }
}
