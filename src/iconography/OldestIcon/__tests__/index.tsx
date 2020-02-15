import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { OldestIcon } from "..";

describe("<OldestIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<OldestIcon />);
    expect(getByTestId("oldestIcon")).toBeInTheDocument();
  });
});
