export interface ITableField {
  name: string;
  type: string;
}

export interface ITableCell {
  text: string;
  validation_error?: string;
}

export interface ITableRecord {
  uuid: string;
  created: string;
  name: string;
  data: {
    fund_name: ITableCell & ITableField;
    due_date: ITableCell & ITableField;
    price: ITableCell & ITableField;
  };
}

export interface ITable {
  count: number;
  fields: ITableField[];
  results: ITableRecord[];
}
