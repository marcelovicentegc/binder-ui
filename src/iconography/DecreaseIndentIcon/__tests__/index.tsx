import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { DecreaseIndentIcon } from "..";

describe("<DecreaseIndentIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<DecreaseIndentIcon />);
    expect(getByTestId("decreaseIndentIcon")).toBeInTheDocument();
  });
});
