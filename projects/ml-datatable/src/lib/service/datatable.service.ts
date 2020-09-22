import {Injectable} from '@angular/core';
import {MLDatatableSetting} from '../model/ml-datatable-setting';
import {MLDatatableEditMode} from '../model/ml-datatable-edit-mode';
import {MLSelectMode} from '../model/ml-select-mode';
import {MLDatatableColumnType} from '../model/ml-datatable-column-type';
import {MLDatatableColumn} from '../model/ml-datatable-column';

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
      filter: true,
      selectMode: MLSelectMode.NONE,
      singleView: true,
      protected: false,
      searchBox: false,
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
          allowFilter: false,
          inlineStyle: null,
          cssClass: null
        });
      }
    }
    return columns;
  }

  public createDefaultDisplayedColumns(setting: MLDatatableSetting): string[] {
    const displayedColumns = [];
    if (setting.selectMode !== MLSelectMode.NONE) {
      displayedColumns.push('select');
    }

    for (const column of setting.columns) {
      if (column.visible) {
        displayedColumns.push(column.id);
      }
    }

    return displayedColumns;
  }
}
