import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "../../utils/render";
import { Span } from "..";

describe("<Span /> test case", () => {
  test("renders text", () => {
    const { getByText } = render(<Span>Hi, I'm Span</Span>);
    expect(getByText("Hi, I'm Span")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { getByText } = render(<Span>Hi, I'm Span</Span>);
    expect(getByText("Hi, I'm H4")).toMatchSnapshot();
  });
});
