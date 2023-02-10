import React, { FunctionComponent, useEffect, useState } from "react";
import { ITableCell, ITableField } from "../../../../types";
import { isValidDate } from "../../../utils/date";
import "./TableCell.css";

export interface ITableCellProps {
  cellData: ITableCell & ITableField;
  onError?: (error: string) => void;
}

const TableCell: FunctionComponent<ITableCellProps> = ({
  cellData,
  onError,
}) => {
  const { name, type, text, validation_error } = cellData;
  const [cellVal, setCellVal] = useState<string>(text);
  const [error, setError] = useState<string>(validation_error || "");

  useEffect(() => {
    if (onError) {
      onError(error || "");
    }
  }, [error, onError]);

  const onCellChange = (event: React.FormEvent<HTMLInputElement>) => {
    const date = event.currentTarget.value;
    setCellVal(date);
    const error = isValidDate(date)
      ? ""
      : `${date} is not in the correct format of YYYY-MM-DD`;
    setError(error);
  };

  return (
    <div className="TableCell">
      {type === "readonly" ? (
        <div data-testid="readonly">{text}</div>
      ) : (
        <>
          <label data-testid="cellLabel" className="cellLabel" htmlFor={name}>
            {name}
          </label>
          <div>
            <input
              data-testid="cellInput"
              id={name}
              type={type}
              value={cellVal}
              onChange={onCellChange}
              className={error !== "" ? "error" : ""}
            />
            {error !== "" && (
              <div
                data-testid="cellErrorMessage"
                className="cellError errorText"
              >
                {error}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default TableCell;
