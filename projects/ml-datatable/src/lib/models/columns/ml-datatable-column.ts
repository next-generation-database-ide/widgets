import {MLDatatableColumnType} from './ml-datatable-column-type';
import {MLDatatableColumnFilter} from './ml-datatable-column-filter';

export class MLDatatableColumn {
  id: string;
  name?: string;
  visible?: boolean;
  width?: number;
  type?: MLDatatableColumnType;
  filter?: MLDatatableColumnFilter;
  required?: boolean;
}
