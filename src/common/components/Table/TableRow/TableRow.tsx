import React, { FunctionComponent, useState } from "react";
import { ITableRecord } from "../../../../types";
import TableCell from "../TableCell/TableCell";
import "./TableRow.css";

interface ITableRowProps {
  onChange: (uuid: string) => void;
  rowData: ITableRecord;
}

const TableRow: FunctionComponent<ITableRowProps> = ({ onChange, rowData }) => {
  const { uuid, data, name, created } = rowData;
  const { fund_name, due_date, price } = data;

  const [dueDateError, setDueDateError] = useState<string>();

  return (
    <div className="TableRow">
      <div className="row">
        <div className="checkbox">
          <input
            onChange={() => {
              onChange(uuid);
            }}
            type="checkbox"
          />
        </div>
        <div>
          <TableCell
            cellData={{
              text: name,
              name: "Name",
              type: "readonly",
            }}
          />
        </div>
        <div>
          <TableCell
            cellData={{
              text: new Date(created).toLocaleDateString("en-us", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }),
              name: "Date Created",
              type: "readonly",
            }}
          />
        </div>
        <div>
          <TableCell cellData={fund_name} />
        </div>
        <div>
          <TableCell cellData={due_date} onError={(error: string) => {
            setDueDateError(error);
          }} />
        </div>
        <div>
          <TableCell cellData={price} />
        </div>
      </div>
      <div className="row errorText errorRow">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div>{dueDateError}</div>
        <div></div>
      </div>
    </div>
  );
};

export default TableRow;
