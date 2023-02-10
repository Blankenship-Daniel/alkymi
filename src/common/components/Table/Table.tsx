import React, { FunctionComponent } from "react";
import { ITable, ITableRecord } from "../../../types";
import "./Table.css";
import TableHeader from "./TableHeader/TableHeader";
import TableRow from "./TableRow/TableRow";

interface ITableProps {
  onChange: (uuid: string) => void;
  tableData: ITable;
}

const Table: FunctionComponent<ITableProps> = ({ onChange, tableData }) => {
  const { fields, results } = tableData;
  return (
    <div className="Table">
      <div className="header"><TableHeader fields={fields} /></div>
      {results.map((row: ITableRecord) => <TableRow onChange={onChange} key={row.uuid} rowData={row} />)}
    </div>
  );
};

export default Table;
