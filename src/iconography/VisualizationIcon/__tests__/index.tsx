import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { VisualizationIcon } from "..";

describe("<VisualizationIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<VisualizationIcon />);
    expect(getByTestId("visualizationIcon")).toBeInTheDocument();
  });
});
