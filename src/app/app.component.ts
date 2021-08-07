import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public searchWord: string;
  @ViewChild(MatSort) sort: MatSort;

  searchThis(searchword: string) {
    this.searchWord = searchword;
  }
}
