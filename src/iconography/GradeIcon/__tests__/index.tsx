import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { GradeIcon } from "..";

describe("<GradeIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<GradeIcon />);
    expect(getByTestId("gradeIcon")).toBeInTheDocument();
  });
});
