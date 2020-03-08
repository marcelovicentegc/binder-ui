import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { RestoreIcon } from "..";

describe("<RestoreIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<RestoreIcon />);
    expect(getByTestId("restoreIcon")).toBeInTheDocument();
  });
});
