import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { UndoChangesIcon } from "..";

describe("<UndoChangesIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<UndoChangesIcon />);
    expect(getByTestId("undoChangesIcon")).toBeInTheDocument();
  });
});
