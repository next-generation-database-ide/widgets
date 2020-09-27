import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {SelectionModel} from '@angular/cdk/collections';
import {DatatableService} from './services/datatable.service';
import {MLDatatableSetting} from './models/ml-datatable-setting';
import {MLDatatableSelectMode} from './models/ml-datatable-select-mode';

@Component({
  selector: 'ml-datatable',
  templateUrl: 'ml-datatable.component.html',
  styleUrls: ['ml-datatable.component.scss']
})
export class MLDatatableComponent<T> implements OnInit, OnChanges, AfterViewInit {

  @Input() setting: MLDatatableSetting;
  @Input() dataUrl: string;
  @Input() dataSource: T[];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataObject: any;
  displayedColumns = [];
  filterDisplayedColumns = [];
  selection: SelectionModel<T>;

  selectedRowIndex = -1;

  constructor(private datatableService: DatatableService) {
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
      this.setting = this.datatableService.createDefaultSetting();
    }

    if (this.setting.columns === null
      || this.setting.columns.length === 0) {
      this.setting.columns = this.datatableService.createDefaultColumns(this.dataSource);
    }

    this.displayedColumns = this.datatableService.createDefaultDisplayedColumns(this.setting);
    this.filterDisplayedColumns = this.datatableService.createDefaultFilterDisplayedColumns(this.setting);

    this.dataObject = new MatTableDataSource<T>(this.dataSource);

    if (this.setting.selectMode !== MLDatatableSelectMode.NONE) {
      this.selection = new SelectionModel<T>(
        (this.setting.selectMode === MLDatatableSelectMode.MULTI), []);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngAfterViewInit(): void {
    this.dataObject.sort = this.sort;
    this.dataObject.paginator = this.paginator;
  }

  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataObject.data.length;
    return numSelected === numRows;
  }

  toggleAll(): void {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataObject.data.forEach(row => this.selection.select(row));
  }

  isMultipleSelect(): boolean {
    return this.setting.selectMode === MLDatatableSelectMode.MULTI;
  }

  openSingleViewDialog(row: T): void {
    console.log(row);
  }

  canHighlightSelectRow(row: any): boolean {
    return this.selectedRowIndex === row.id;
  }

  highlightSelectRow(row): void {
    this.selectedRowIndex = row.id;
  }
}
