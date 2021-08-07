import { Injectable } from '@angular/core';
import { DESCRIPTIONS, TEMP_DATA } from './testData';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {
  constructor() {}

  public getData() {
    return this.populateDescriptions();
  }
    
  populateDescriptions() {
    for( var e of TEMP_DATA){
      e.descriptions = this.shuffleArray(DESCRIPTIONS).slice(0, e.noOfEntities);
    }
    return TEMP_DATA;
  }
  
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
