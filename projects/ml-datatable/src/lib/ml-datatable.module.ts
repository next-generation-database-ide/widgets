import { NgModule } from '@angular/core';
import { MlDatatableComponent } from './ml-datatable.component';
import {MatTableModule} from '@angular/material/table';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [MlDatatableComponent],
  imports: [
    HttpClientModule,
    MatTableModule,
    CommonModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    MatIconModule
  ],
  exports: [MlDatatableComponent]
})
export class MlDatatableModule { }
