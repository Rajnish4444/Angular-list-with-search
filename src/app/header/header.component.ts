import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  @Output() searchcriteria = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  searchThis(searchword: string) {
    this.searchcriteria.emit(searchword)
}
  
}
