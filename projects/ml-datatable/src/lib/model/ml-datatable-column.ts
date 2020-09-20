import {MLDatatableColumnType} from './ml-datatable-column-type';

export class MLDatatableColumn {
  id: string;
  name: string;
  visible: boolean;
  width: number;
  type: MLDatatableColumnType;
  required: boolean;
  inlineStyle: string;
  cssClass: string;
}
