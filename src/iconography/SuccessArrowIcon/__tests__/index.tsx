import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { SuccessArrowIcon } from "..";
import { theme } from "../../../utils/Theme";

describe("<SuccessArrowIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<SuccessArrowIcon />);
    expect(getByTestId("successArrowIcon")).toBeInTheDocument();
  });

  test("renders color passed via props", () => {
    const { getByTestId } = render(
      <SuccessArrowIcon color={theme.color.red5} />
    );
    expect(getByTestId("successArrowIcon")).toMatchSnapshot();
  });
});
