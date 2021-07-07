import { Injectable } from '@angular/core';
import { Images } from './images';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  getData(tableName: string) {
    return Images[tableName];
  }
}
