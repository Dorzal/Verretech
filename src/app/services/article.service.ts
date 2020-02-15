import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import Article from '../models/Article';
import { environment } from 'environments/environment';

const apiUrl = `${environment.rootUrl}/articles`;

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  

  getArticles() :Observable<Article[]> {
    return this.http.get<Article[]>(apiUrl);
  }

}
