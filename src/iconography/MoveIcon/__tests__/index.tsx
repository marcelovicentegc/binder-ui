import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { MoveIcon } from "..";

describe("<MoveIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<MoveIcon />);
    expect(getByTestId("moveIcon")).toBeInTheDocument();
  });
});
