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

  getOccasionalCakeDetails(id:number): Observable<Product[]> {
    return this.http.get<Product[]>('https://sweetartcakes-be-production.up.railway.app/occassionalcakedetails/' + id);
  }
}
