import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { TextBoxColorIcon } from "..";
import { theme } from "../../../utils/Theme";

describe("<TextBoxColorIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<TextBoxColorIcon />);
    expect(getByTestId("textBoxColorIcon")).toBeInTheDocument();
  });

  test("renders colors passed via props", () => {
    const { getByTestId } = render(
      <TextBoxColorIcon color={theme.color.orange3} />
    );
    expect(getByTestId("textBoxColorIcon")).toMatchSnapshot();
  });
});
