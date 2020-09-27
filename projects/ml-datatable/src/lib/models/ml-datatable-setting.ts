import {MLDatatableEditMode} from './ml-datatable-edit-mode';
import {MLDatatableSelectMode} from './ml-datatable-select-mode';
import {MLDatatableColumn} from './columns/ml-datatable-column';

export class MLDatatableSetting {
  display?: {
    paging?: boolean;
    pageSizeOptions: number[];
  };
  edit?: {
    enabled?: boolean;
    mode?: MLDatatableEditMode;
  };
  export?: {
    excel?: boolean;
    pdf?: boolean;
    csv?: boolean;
    tsv?: boolean;
  };
  enableSearch?: boolean;
  selectMode: MLDatatableSelectMode;
  singleView?: boolean;
  protected?: boolean;
  columns?: MLDatatableColumn[];
}
