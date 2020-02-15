import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { ArrowIcon } from "..";
import { theme } from "../../../utils/Theme/index";

describe("<ArrowIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<ArrowIcon />);
    expect(getByTestId("arrowIcon")).toBeInTheDocument();
  });

  test("renders color passed via props", () => {
    const { getByTestId } = render(<ArrowIcon color={theme.color.yellow2} />);
    expect(getByTestId("arrowIcon")).toMatchSnapshot();
  });
});
