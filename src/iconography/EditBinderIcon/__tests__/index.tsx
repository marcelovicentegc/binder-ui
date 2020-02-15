import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { EditBinderIcon } from "..";

describe("<EditBinderIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<EditBinderIcon />);
    expect(getByTestId("editBinderIcon")).toBeInTheDocument();
  });
});
