import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class HomecategoriesService {

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<Category[]>('https://bonjoebe-api-production.up.railway.app/api_categories/').pipe(
      map(category => category)
    );
  }
}
