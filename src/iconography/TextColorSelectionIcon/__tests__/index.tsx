import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { TextColorSelectionIcon } from "..";

describe("<TextColorSelectionIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<TextColorSelectionIcon />);
    expect(getByTestId("textColorSelectionIcon")).toBeInTheDocument();
  });
});
