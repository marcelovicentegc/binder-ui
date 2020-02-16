import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { IncreaseIndentIcon } from "..";

describe("<IncreaseIndentIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<IncreaseIndentIcon />);
    expect(getByTestId("increaseIndentIcon")).toBeInTheDocument();
  });
});
