import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { EditBinderThemeIcon } from "..";

describe("<EditBinderThemeIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<EditBinderThemeIcon />);
    expect(getByTestId("editBinderThemeIcon")).toBeInTheDocument();
  });
});
