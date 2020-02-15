import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { BinderIcon } from "..";

describe("<BinderIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<BinderIcon />);
    expect(getByTestId("binderIcon")).toBeInTheDocument();
  });
});
