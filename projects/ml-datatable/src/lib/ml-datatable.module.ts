import { NgModule } from '@angular/core';
import { MlDatatableComponent } from './ml-datatable.component';
import {MatTableModule} from '@angular/material/table';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [MlDatatableComponent],
  imports: [
    HttpClientModule,
    MatTableModule,
    CommonModule
  ],
  exports: [MlDatatableComponent]
})
export class MlDatatableModule { }
