import { NgModule } from '@angular/core';
import { MlDatatableComponent } from './ml-datatable.component';
import {MatTableModule} from '@angular/material/table';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [MlDatatableComponent],
  imports: [
    MatTableModule,
    CommonModule
  ],
  exports: [MlDatatableComponent]
})
export class MlDatatableModule { }
