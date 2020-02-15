import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { DoorIcon } from "..";

describe("<DoorIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<DoorIcon />);
    expect(getByTestId("doorIcon")).toBeInTheDocument();
  });
});
