import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { SideBySideIcon } from "..";
import { theme } from "../../../utils/Theme";

describe("<SideBySideIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<SideBySideIcon />);
    expect(getByTestId("sideBySideIcon")).toBeInTheDocument();
  });

  test("renders color passed via props", () => {
    const { getByTestId } = render(
      <SideBySideIcon color={theme.color.gray6} />
    );
    expect(getByTestId("sideBySideIcon")).toMatchSnapshot();
  });
});
