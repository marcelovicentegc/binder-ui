import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { TextBoxIcon } from "..";

describe("<TextBoxIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<TextBoxIcon />);
    expect(getByTestId("textBoxIcon")).toBeInTheDocument();
  });
});
