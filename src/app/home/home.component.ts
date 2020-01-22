import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import Article from '../models/Article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Articles : Article[];

  constructor(private articleService : ArticleService) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() : void {
    this.articleService.getArticles().subscribe(data => this.Articles = data);
  }

}
