import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { TextColorIcon } from "..";

describe("<TextColorIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<TextColorIcon />);
    expect(getByTestId("textColorIcon")).toBeInTheDocument();
  });
});
