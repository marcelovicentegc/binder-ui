import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { RedoChangesIcon } from "..";

describe("<RedoChangesIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<RedoChangesIcon />);
    expect(getByTestId("redoChangesIcon")).toBeInTheDocument();
  });
});
