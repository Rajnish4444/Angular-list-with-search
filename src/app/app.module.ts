import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DataTableComponent } from './data-table/data-table.component';
import { TableDataService } from './table-data.service';
import { MatIconModule} from '@angular/material/icon';
import { MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [BrowserModule, FormsModule, MatIconModule, MatTableModule],
  declarations: [AppComponent, HeaderComponent, DataTableComponent],
  bootstrap: [AppComponent],
  providers: [TableDataService]
})
export class AppModule {}
