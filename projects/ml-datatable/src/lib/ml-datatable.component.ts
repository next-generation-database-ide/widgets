import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {MLDatatableSetting} from './model/ml-datatable-setting';
import {HttpClient} from '@angular/common/http';
import {MLDatatableColumnType} from './model/ml-datatable-column-type';
import {MLDatatableEditMode} from './model/ml-datatable-edit-mode';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'ml-datatable',
  templateUrl: 'ml-datatable.component.html',
  styleUrls: ['ml-datatable.component.scss']
})
export class MlDatatableComponent<T> implements OnInit, OnChanges, AfterViewInit {
  @Input() setting: MLDatatableSetting;
  @Input() dataUrl: string;
  @Input() dataSource: T[];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataObject: any;
  displayedColumns = [];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    if (this.dataSource == null
      && this.dataUrl == null) {
      throw new Error('No dataSource or dataUrl defined');
    }

    if (this.dataSource != null && this.dataUrl != null) {
      throw new Error('Both dataSource and dataUrl are defined. Please use only one');
    }

    if (this.setting == null) {
      this.setting = this.createDefaultSetting();
    }

    if (this.setting.columns === null
      || this.setting.columns.length === 0) {
      this.createDefaultColumns();
    }

    this.createDefaultDisplayedColumns();

    this.dataObject = new MatTableDataSource<T>(this.dataSource);
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngAfterViewInit(): void {
    this.dataObject.sort = this.sort;
    this.dataObject.paginator = this.paginator;
  }

  columnFilterDefined(): boolean {
    return this.setting.columns.find(column => column.allowFilter === true) != null;
  }

  private createDefaultSetting(): MLDatatableSetting {
    return {
      display: {
        paging: true,
        pageSizeOptions: [10, 50, 100]
      },
      edit: {
        enabled: false,
        mode: MLDatatableEditMode.FORM_POPUP
      },
      export: {
        excel: false,
        pdf: false,
        csv: false,
        tsv: false
      },
      singleView: false,
      protected: false,
      searchBox: false,
      columns: []
    };
  }

  private createDefaultColumns(): void {
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
          allowFilter: false,
          inlineStyle: null,
          cssClass: null
        });
      }
    }
  }

  private createDefaultDisplayedColumns(): void {
    this.displayedColumns = [];
    for (const column of this.setting.columns) {
      if (column.visible) {
        this.displayedColumns.push(column.id);
      }
    }
  }
}
