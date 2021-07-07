import { Component, OnInit } from '@angular/core';
import { ArticlesimagesbyUnsplashcomService } from '../../services/articlesimagesby-unsplashcom.service';

@Component({
  selector: 'app-child-view1',
  templateUrl: './child-view1.component.html',
  styleUrls: ['./child-view1.component.scss']
})
export class ChildView1Component implements OnInit {
  public articlesimagesbyUnsplashcomAllArticles: any[];
  public articlesimagesbyUnsplashcomTable5: any[];
  public articlesimagesbyUnsplashcomLatest: any[];
  public articlesimagesbyUnsplashcomTable2: any[];
  public articlesimagesbyUnsplashcomDestinations: any[];

  constructor(
    private articlesimagesbyUnsplashcomService: ArticlesimagesbyUnsplashcomService,
  ) {}

  ngOnInit() {
    this.articlesimagesbyUnsplashcomAllArticles = this.articlesimagesbyUnsplashcomService.getData('All articles');
    this.articlesimagesbyUnsplashcomTable5 = this.articlesimagesbyUnsplashcomService.getData('Table 5');
    this.articlesimagesbyUnsplashcomLatest = this.articlesimagesbyUnsplashcomService.getData('Latest');
    this.articlesimagesbyUnsplashcomTable2 = this.articlesimagesbyUnsplashcomService.getData('Table 2');
    this.articlesimagesbyUnsplashcomDestinations = this.articlesimagesbyUnsplashcomService.getData('Destinations');
  }
}
