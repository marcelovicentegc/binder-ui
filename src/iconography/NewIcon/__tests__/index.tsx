import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { NewIcon } from "..";
import { theme } from "../../../utils/Theme";

describe("<NewIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<NewIcon />);
    expect(getByTestId("newIcon")).toBeInTheDocument();
  });

  test("renders color passed via props", () => {
    const { getByTestId } = render(<NewIcon color={theme.color.gray5} />);
    expect(getByTestId("newIcon")).toMatchSnapshot();
  });
});
