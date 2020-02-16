import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { SelectedIcon } from "..";

describe("<SelectedIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<SelectedIcon />);
    expect(getByTestId("selectedIcon")).toBeInTheDocument();
  });

  test("renders dimensions passed via props", () => {
    const { getByTestId } = render(<SelectedIcon dimension={40} />);
    expect(getByTestId("selectedIcon")).toMatchSnapshot();
  });
});
