import {ColumnTypeEnum} from './column-type.enum';

export class ColumnModel {
  id: string;
  name: string;
  visible: boolean;
  width: number;
  type: ColumnTypeEnum;
  required: boolean;
  inlineStyle: string;
  cssClass: string;
}
