import { Component, OnInit } from '@angular/core';
import { ArticlesimagesbyUnsplashcomService } from '../../services/articlesimagesby-unsplashcom.service';
import { DestinationsService } from '../../services/destinations.service';
import { NorthwindService } from '../../services/northwind.service';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-child-view',
  templateUrl: './child-view.component.html',
  styleUrls: ['./child-view.component.scss']
})
export class ChildViewComponent implements OnInit {
  public articlesimagesbyUnsplashcomLatest: any[];
  public destinationsPhotos: any[];
  public northwindProducts: any[];
  public imagesTable1: any[];
  public imagesTable2: any[];

  constructor(
    private articlesimagesbyUnsplashcomService: ArticlesimagesbyUnsplashcomService,
    private destinationsService: DestinationsService,
    private northwindService: NorthwindService,
    private imagesService: ImagesService,
  ) {}

  ngOnInit() {
    this.articlesimagesbyUnsplashcomLatest = this.articlesimagesbyUnsplashcomService.getData('Latest');
    this.destinationsPhotos = this.destinationsService.getData('Photos');
    this.northwindProducts = this.northwindService.getData('Products');
    this.imagesTable1 = this.imagesService.getData('Table 1');
    this.imagesTable2 = this.imagesService.getData('Table 2');
  }
}
