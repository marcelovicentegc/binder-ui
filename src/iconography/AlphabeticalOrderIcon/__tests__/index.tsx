import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { AlphabeticalOrderIcon } from "..";

describe("<AlphabeticalOrderIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<AlphabeticalOrderIcon />);
    expect(getByTestId("alphabeticalOrderIcon")).toBeInTheDocument();
  });
});
