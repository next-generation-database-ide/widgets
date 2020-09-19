import {SettingEditModeEnum} from './setting-edit-mode.enum';
import {ColumnModel} from './column.model';

export class SettingModel {
  display?: {
    paging?: boolean;
    recordPerPage?: number;
  };
  edit?: {
    enabled?: boolean;
    mode?: SettingEditModeEnum;
  };
  export?: {
    excel?: boolean;
    pdf?: boolean;
    csv?: boolean;
    tsv?: boolean;
  };
  singleView?: boolean;
  protected?: boolean;
  showFilter?: boolean;
  searchBox?: boolean;
  columns?: ColumnModel[];
}
