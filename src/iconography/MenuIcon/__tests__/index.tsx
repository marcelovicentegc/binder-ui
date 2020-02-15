import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { MenuIcon } from "..";
import { theme } from "../../../utils/Theme";

describe("<MenuIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<MenuIcon />);
    expect(getByTestId("menuIcon")).toBeInTheDocument();
  });

  test("renders color passed via props", () => {
    const { getByTestId } = render(<MenuIcon color={theme.color.red5} />);
    expect(getByTestId("menuIcon")).toMatchSnapshot();
  });
});
