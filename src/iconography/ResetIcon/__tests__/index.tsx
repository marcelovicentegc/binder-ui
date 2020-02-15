import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { ResetIcon } from "..";

describe("<ResetIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<ResetIcon />);
    expect(getByTestId("resetIcon")).toBeInTheDocument();
  });
});
