import { Injectable } from '@angular/core';
import { Destinations } from './destinations';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {
  getData(tableName: string) {
    return Destinations[tableName];
  }
}
