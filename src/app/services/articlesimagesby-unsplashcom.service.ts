import { Injectable } from '@angular/core';
import { ArticlesimagesbyUnsplashcom } from './articlesimagesby-unsplashcom';

@Injectable({
  providedIn: 'root'
})
export class ArticlesimagesbyUnsplashcomService {
  getData(tableName: string) {
    return ArticlesimagesbyUnsplashcom[tableName];
  }
}
