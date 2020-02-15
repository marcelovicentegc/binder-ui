import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { ArrowDownIcon } from "..";

describe("<ArrowDownIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<ArrowDownIcon />);
    expect(getByTestId("arrowDownIcon")).toBeInTheDocument();
  });
});
