import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryBlogs } from '../interfaces/category-blogs';

@Injectable({
  providedIn: 'root'
})
export class CategoryblogsService {

  id:number =0;

  constructor(private http :HttpClient) { }

  getCategoryBlogs(id:number): Observable<CategoryBlogs[]> {
    return this.http.get<CategoryBlogs[]>('https://sweetartcakes-be-production.up.railway.app/categoryblogs/' + id);
  }
}
