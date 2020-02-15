import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { ShareIcon } from "..";

describe("<ShareIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<ShareIcon />);
    expect(getByTestId("shareIcon")).toBeInTheDocument();
  });
});
