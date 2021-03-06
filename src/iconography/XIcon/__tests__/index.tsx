import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { XIcon } from "..";

describe("<XIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<XIcon />);
    expect(getByTestId("xIcon")).toBeInTheDocument();
  });
});
