import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { BellIcon } from "..";

describe("<BellIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<BellIcon />);
    expect(getByTestId("bellIcon")).toBeInTheDocument();
  });
});
