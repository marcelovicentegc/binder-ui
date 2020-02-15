import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { UserOptionsIcon } from "..";
import { theme } from "../../../utils/Theme";

describe("<UserOptionsIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<UserOptionsIcon />);
    expect(getByTestId("userOptionsIcon")).toBeInTheDocument();
  });

  test("renders color passed via props", () => {
    const { getByTestId } = render(
      <UserOptionsIcon color={theme.color.red5} />
    );
    expect(getByTestId("userOptionsIcon")).toMatchSnapshot();
  });
});
