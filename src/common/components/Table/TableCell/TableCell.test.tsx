import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TableCell, { ITableCellProps } from "./TableCell";

const inputProps: ITableCellProps = {
  cellData: {
    text: "2030-12-11",
    name: "Due Date",
    type: "date",
  },
};

const inputErrorProps: ITableCellProps = {
  cellData: {
    text: "10000",
    name: "Custom Field",
    type: "text",
    validation_error: "Custom error message",
  },
};

const readOnlyProps: ITableCellProps = {
  cellData: {
    text: "Custom Read Only",
    name: "Read Only",
    type: "readonly",
  },
};

test("renders TableCell with date input", () => {
  render(<TableCell {...inputProps} />);
  const inputEl = screen.getByTestId("cellInput");
  expect(inputEl).toHaveValue(inputProps.cellData.text);
  expect(inputEl).not.toHaveClass("error");
  expect(inputEl).toHaveAttribute("type", inputProps.cellData.type);
});

test("renders TableCell with input in error state", () => {
  render(<TableCell {...inputErrorProps} />);
  const inputEl = screen.getByTestId("cellInput");
  expect(inputEl).toHaveValue(inputErrorProps.cellData.text);
  expect(inputEl).toHaveClass("error");
  expect(inputEl).toHaveAttribute("type", inputErrorProps.cellData.type);
  expect(screen.getByTestId("cellErrorMessage")).toHaveTextContent(
    inputErrorProps.cellData.validation_error || ""
  );
});

test("removes error state when proper date is entered", async () => {
  render(<TableCell {...inputErrorProps} />);
  const inputEl = screen.getByTestId("cellInput");
  expect(inputEl).toHaveClass("error");
  fireEvent.change(inputEl, { target: { value: "2020-07-01" } });
  const updatedEl = await screen.findByTestId("cellInput");
  expect(updatedEl).not.toHaveClass("error");
});

test("renders TableCell as readonly", () => {
  render(<TableCell {...readOnlyProps} />);
  expect(screen.getByTestId("readonly")).toHaveTextContent(
    readOnlyProps.cellData.text
  );
  expect(screen.getByTestId("cellLabel")).toHaveTextContent(
    readOnlyProps.cellData.name
  );
});
