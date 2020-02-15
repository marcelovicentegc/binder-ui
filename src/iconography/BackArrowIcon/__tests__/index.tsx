import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { BackArrowIcon } from "..";

describe("<BackArrowIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<BackArrowIcon />);
    expect(getByTestId("backArrowIcon")).toBeInTheDocument();
  });
});
