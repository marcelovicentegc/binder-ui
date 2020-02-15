import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { BinderLogoIcon } from "..";

describe("<BinderLogoIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<BinderLogoIcon />);
    expect(getByTestId("binderLogoIcon")).toBeInTheDocument();
  });
});
