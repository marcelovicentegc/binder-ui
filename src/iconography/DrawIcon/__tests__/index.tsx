import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { DrawIcon } from "..";

describe("<DrawIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<DrawIcon />);
    expect(getByTestId("drawIcon")).toBeInTheDocument();
  });
});
