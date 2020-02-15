import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { AboutIcon } from "..";

describe("<AboutIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<AboutIcon />);
    expect(getByTestId("aboutIcon")).toBeInTheDocument();
  });
});
