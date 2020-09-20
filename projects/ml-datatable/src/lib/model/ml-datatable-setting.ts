import {MLDatatableEditMode} from './ml-datatable-edit-mode';
import {MLDatatableColumn} from './ml-datatable-column';

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
  singleView?: boolean;
  protected?: boolean;
  searchBox?: boolean;
  columns?: MLDatatableColumn[];
}
