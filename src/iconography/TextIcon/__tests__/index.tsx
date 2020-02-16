import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { TextIcon } from "..";

describe("<TextIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<TextIcon />);
    expect(getByTestId("textIcon")).toBeInTheDocument();
  });
});
