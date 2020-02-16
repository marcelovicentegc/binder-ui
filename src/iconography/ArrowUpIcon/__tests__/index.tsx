import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { ArrowUpIcon } from "..";

describe("<ArrowUpIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<ArrowUpIcon />);
    expect(getByTestId("arrowUpIcon")).toBeInTheDocument();
  });
});
