import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { EditBinderCoverIcon } from "..";

describe("<EditBinderCoverIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<EditBinderCoverIcon />);
    expect(getByTestId("editBinderCoverIcon")).toBeInTheDocument();
  });
});
