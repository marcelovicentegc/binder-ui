import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { TextBoxColorIcon } from "..";

describe("<TextBoxColorIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<TextBoxColorIcon />);
    expect(getByTestId("textBoxColorIcon")).toBeInTheDocument();
  });
});
