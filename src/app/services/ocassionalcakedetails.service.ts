import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class OcassionalcakedetailsService {

  id:number = 0;

  constructor(private http:HttpClient) { }

  getBabyShowerCakeDetails(id:number): Observable<Product[]> {
    return this.http.get<Product[]>('https://sweetartcakes-be-production.up.railway.app/babyShowerCakesDetails/' + id);
  }

  getBridalShowerCakeDetails(id:number): Observable<Product[]> {
    return this.http.get<Product[]>('https://sweetartcakes-be-production.up.railway.app/bridalShowerCakesDetails/' + id);
  }

  getChristmasCakeDetails(id:number): Observable<Product[]> {
    return this.http.get<Product[]>('https://sweetartcakes-be-production.up.railway.app/christmasCakesDetails/' + id);
  }

  getEasterCakeDetails(id:number): Observable<Product[]> {
    return this.http.get<Product[]>('https://sweetartcakes-be-production.up.railway.app/easterCakesDetails/' + id);
  }

  getFathersDayCakeDetails(id:number): Observable<Product[]> {
    return this.http.get<Product[]>('https://sweetartcakes-be-production.up.railway.app/fathersDayCakesDetails/' + id);
  }

  getMothersDayCakeDetails(id:number): Observable<Product[]> {
    return this.http.get<Product[]>('https://sweetartcakes-be-production.up.railway.app/mothersDayCakesDetails/' + id);
  }
}
