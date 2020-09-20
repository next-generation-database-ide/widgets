import {Component} from '@angular/core';
import {MLDatatableEditMode} from '../../../ml-datatable/src/lib/model/ml-datatable-edit-mode';
import {MLDatatableSetting} from '../../../ml-datatable/src/lib/model/ml-datatable-setting';
import {MLDatatableColumnType} from '../../../ml-datatable/src/lib/model/ml-datatable-column-type';
import {MLSelectMode} from '../../../ml-datatable/src/lib/model/ml-select-mode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ml-datatable-demo';

  dataSource = [
    {id: 1, name: 'Apple', category: 'Fruit', price: 13, sellDate: new Date().toDateString()},
    {id: 2, name: 'Orange', category: 'Fruit', price: 45},
    {id: 3, name: 'Pineapple', category: 'Fruit', price: 76},
    {id: 4, name: 'Watermelon', category: 'Fruit', price: 13},
    {id: 5, name: 'Mandarin', category: 'Fruit', price: 12}
  ];

  setting: MLDatatableSetting = {
    display: {
      paging: true,
      pageSizeOptions: [10, 50, 100, 200]
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
    selectMode: MLSelectMode.MULTI,
    searchBox: false,
    columns: [
      {
        id: 'id', name: 'ID', visible: true, width: 75,
        type: MLDatatableColumnType.READONLY, required: false, allowFilter: true
      }, {
        id: 'name', name: 'Name', visible: true, width: 125,
        type: MLDatatableColumnType.READONLY, required: false, allowFilter: true
      }, {
        id: 'category', name: 'Category', visible: true, width: 100,
        type: MLDatatableColumnType.READONLY, required: false, allowFilter: true
      }, {
        id: 'price', name: 'Price', visible: true, width: 100,
        type: MLDatatableColumnType.READONLY, required: false, allowFilter: true
      }, {
        id: 'sellDate', name: 'Sell Date', visible: true, width: 100,
        type: MLDatatableColumnType.READONLY, required: false, allowFilter: true
      }
    ]
  };

  constructor() {
  }
}
