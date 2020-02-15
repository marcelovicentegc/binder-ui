import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { EditUserIcon } from "..";

describe("<EditUserIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<EditUserIcon />);
    expect(getByTestId("editUserIcon")).toBeInTheDocument();
  });
});
