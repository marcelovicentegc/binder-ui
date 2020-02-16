import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { TextBoxColorSelectionIcon } from "..";

describe("<TextBoxColorSelectionIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<TextBoxColorSelectionIcon />);
    expect(getByTestId("textBoxColorSelectionIcon")).toBeInTheDocument();
  });
});
