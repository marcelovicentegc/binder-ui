import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { FormatTextBoxIcon } from "..";

describe("<FormatTextBoxIcon/> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<FormatTextBoxIcon />);
    expect(getByTestId("formatTextBoxIcon")).toBeInTheDocument();
  });
});
