import {MLDatatableEditMode} from './ml-datatable-edit-mode';
import {MLDatatableColumn} from './ml-datatable-column';
import {MLSelectMode} from './ml-select-mode';

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
  selectMode: MLSelectMode;
  singleView?: boolean;
  protected?: boolean;
  searchBox?: boolean;
  columns?: MLDatatableColumn[];
}
