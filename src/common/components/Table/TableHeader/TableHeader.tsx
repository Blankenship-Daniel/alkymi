import React, { FunctionComponent } from "react";
import { ITableField } from "../../../../types";
import "./TableHeader.css";

interface ITableHeaderProps {
  fields: ITableField[];
}

const TableHeader: FunctionComponent<ITableHeaderProps> = ({ fields }) => {
  return (
    <div className="TableHeader row">
      <div>&nbsp;</div>
      <div>Name</div>
      <div>Date Created</div>
      {fields.map((field: ITableField, i) => (
        <div key={`${field.name}_${i}`}>
          {field.name}
        </div>
      ))}
    </div>
  );
};

export default TableHeader;
