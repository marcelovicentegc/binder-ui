import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { DragDropIcon } from "..";

describe("<DragDropIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<DragDropIcon />);
    expect(getByTestId("dragDropIcon")).toBeInTheDocument();
  });
});
