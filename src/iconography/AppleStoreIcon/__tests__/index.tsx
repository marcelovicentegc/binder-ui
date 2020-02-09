import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { AppleStore, StoreType } from "..";

describe("<AppleStore /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<AppleStore />);
    expect(getByTestId("colorfulAppleStore")).toBeInTheDocument();
  });

  test("renders gray icon", () => {
    const { getByTestId } = render(<AppleStore type={StoreType.gray} />);
    expect(getByTestId("grayAppleStore")).toBeInTheDocument();
  });

  test("renders white icon", () => {
    const { getByTestId } = render(<AppleStore type={StoreType.white} />);
    expect(getByTestId("whiteAppleStore")).toBeInTheDocument();
  });
});
