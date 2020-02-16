import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { TextColorIcon } from "..";
import { theme } from "../../../utils/Theme";

describe("<TextColorIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<TextColorIcon />);
    expect(getByTestId("textColorIcon")).toBeInTheDocument();
  });

  test("renders color passed via props", () => {
    const { getByTestId } = render(<TextColorIcon color={theme.color.blue3} />);
    expect(getByTestId("textColorIcon")).toMatchSnapshot();
  });
});
