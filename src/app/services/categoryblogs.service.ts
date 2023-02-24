import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blogs } from '../interfaces/blogs';

@Injectable({
  providedIn: 'root'
})
export class CategoryblogsService {

  id:number =0;

  constructor(private http :HttpClient) { }

  getCategoryBlogs(id:number): Observable<Blogs[]> {
    return this.http.get<Blogs[]>('https://sweetartcakes-be-production.up.railway.app/categoryblogs/' + id);
  }
}
