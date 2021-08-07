import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { TableDataService } from '../table-data.service';

import {TableData} from '../TableData';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements AfterViewInit,OnChanges  {
  @Input() searchWord: string;
  displayedColumns: string[] = ['date', 'listName', 'noOfEntities', 'actions'];
  dataSource: MatTableDataSource<TableData> = new MatTableDataSource();
  selection = new SelectionModel<TableData>(false, []);
  currentRow: TableData;
  @ViewChild(MatSort) sort: MatSort;
  selectedDescriptions: String[];

  constructor(private collectionService:TableDataService){}

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (data: TableData, filter: string) => {
      return data.listName.toLowerCase().indexOf(filter) !== -1;
     };
     this.dataSource = new MatTableDataSource(this.collectionService.getData());
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.searchThis();
  }

  searchThis() {
    if(this.searchWord){
      this.searchWord = this.searchWord.trim();
      this.searchWord = this.searchWord.toLowerCase();
      this.dataSource.filter = this.searchWord;
    } else {
      this.dataSource.filter = this.searchWord;
    }
}
  
reset(row){
  if(this.currentRow !== row){
    this.selectedDescriptions = null;
  }
  
}
showDesc(row){
  this.currentRow = row;
  this.selectedDescriptions = this.currentRow.descriptions;
}

}
