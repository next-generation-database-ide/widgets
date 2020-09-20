import {Component, Input, OnInit} from '@angular/core';
import {MLDatatableSetting} from './model/ml-datatable-setting';
import {HttpClient} from '@angular/common/http';
import {MLDatatableColumnType} from './model/ml-datatable-column-type';

@Component({
  selector: 'ml-datatable',
  templateUrl: 'ml-datatable.component.html',
  styles: []
})
export class MlDatatableComponent<T> implements OnInit {
  @Input() setting: MLDatatableSetting;
  @Input() dataUrl: string;
  @Input() dataSource: T[];
  displayedColumns = [];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {

    if (this.setting === null) {
      throw new Error('Input setting is not defined');
    }

    if (this.dataSource === null
      && this.dataUrl === null) {
      throw new Error('No dataSource or dataUrl defined');
    }

    if (this.dataSource !== null && this.dataUrl !== null) {
      throw new Error('Both dataSource and dataUrl are defined. Please use only one');
    }

    if (this.setting.columns === null
      || this.setting.columns.length === 0) {
      this.createDefaultColumns();
    }

    this.setupDisplayColumn();
  }

  createDefaultColumns(): void {
    const firstRow = this.dataSource[0];
    this.setting.columns = [];
    for (const attribute in firstRow) {
      if (firstRow.hasOwnProperty(attribute)) {
        this.setting.columns.push({
          id: attribute,
          name: attribute,
          visible: true,
          width: 100,
          type: MLDatatableColumnType.READONLY,
          required: false,
          inlineStyle: null,
          cssClass: null
        });
      }
    }
  }

  setupDisplayColumn(): void {
    this.displayedColumns = [];
    for (const column of this.setting.columns) {
      this.displayedColumns.push(column.id);
    }
  }
}
