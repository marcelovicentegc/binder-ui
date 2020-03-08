import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { SelectItemsIcon } from "..";
import { theme } from "../../../utils/Theme";

describe("<SelectItemsIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<SelectItemsIcon />);
    expect(getByTestId("selectItemsIcon")).toBeInTheDocument();
  });
});
