import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { TextStyleIcon } from "..";

describe("<TextStyleIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<TextStyleIcon />);
    expect(getByTestId("textStyleIcon")).toBeInTheDocument();
  });
});
