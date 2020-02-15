import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { SearchIcon } from "..";
import { theme } from "../../../utils/Theme";

describe("<SearchIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<SearchIcon />);
    expect(getByTestId("searchIcon")).toBeInTheDocument();
  });

  test("renders color passed via props", () => {
    const { getByTestId } = render(<SearchIcon color={theme.color.orange1} />);
    expect(getByTestId("searchIcon")).toMatchSnapshot();
  });
});
