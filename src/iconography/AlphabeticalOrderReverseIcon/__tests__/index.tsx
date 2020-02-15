import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { AlphabeticalOrderReverseIcon } from "..";

describe("<AlphabeticalOrderReverseIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<AlphabeticalOrderReverseIcon />);
    expect(getByTestId("alphabeticalOrderReverseIcon")).toBeInTheDocument();
  });
});
