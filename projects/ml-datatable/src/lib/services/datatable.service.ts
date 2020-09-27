import {Injectable} from '@angular/core';
import {MLDatatableSetting} from '../models/ml-datatable-setting';
import {MLDatatableEditMode} from '../models/ml-datatable-edit-mode';
import {MLDatatableColumn} from '../models/columns/ml-datatable-column';
import {MLDatatableColumnType} from '../models/columns/ml-datatable-column-type';
import {MLDatatableSelectMode} from '../models/ml-datatable-select-mode';
import {MLDatatableColumnFilterMode} from '../models/columns/ml-datatable-column-filter-mode';

@Injectable({
  providedIn: 'root'
})
export class DatatableService {

  constructor() {
  }

  public createDefaultSetting(): MLDatatableSetting {
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
      enableSearch: true,
      selectMode: MLDatatableSelectMode.NONE,
      singleView: false,
      protected: false,
      columns: []
    };
  }

  public createDefaultColumns(dataSource: any[]): MLDatatableColumn[] {
    const firstRow = dataSource[0];
    const columns = [];
    for (const attribute in firstRow) {
      if (firstRow.hasOwnProperty(attribute)) {
        columns.push({
          id: attribute,
          name: attribute,
          visible: true,
          width: 100,
          type: MLDatatableColumnType.READONLY,
          required: false,
          filter: {
            filterMode: MLDatatableColumnFilterMode.EXACT
          },
          inlineStyle: null,
          cssClass: null
        });
      }
    }
    return columns;
  }

  public createDefaultDisplayedColumns(setting: MLDatatableSetting): string[] {
    const displayedColumns = [];
    if (setting.selectMode === MLDatatableSelectMode.MULTI) {
      displayedColumns.push('select');
    }

    for (const column of setting.columns) {
      if (column.visible) {
        displayedColumns.push(column.id);
      }
    }

    return displayedColumns;
  }

  public createDefaultFilterDisplayedColumns(setting: MLDatatableSetting): string[] {
    const displayedColumns = [];
    if (setting.selectMode === MLDatatableSelectMode.MULTI) {
      displayedColumns.push('filter_select');
    }

    for (const column of setting.columns) {
      if (column.filter) {
        displayedColumns.push(`filter_${column.id}`);
      }
    }

    return displayedColumns;
  }
}
