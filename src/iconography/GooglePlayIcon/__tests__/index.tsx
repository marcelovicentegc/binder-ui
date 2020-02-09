import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { GooglePlay } from "..";
import { StoreType } from "../../AppleStore";

describe("<GooglePlay /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<GooglePlay />);
    expect(getByTestId("colorfulGooglePlay")).toBeInTheDocument();
  });

  test("renders gray icon", () => {
    const { getByTestId } = render(<GooglePlay type={StoreType.gray} />);
    expect(getByTestId("grayGooglePlay")).toBeInTheDocument();
  });

  test("renders white icon", () => {
    const { getByTestId } = render(<GooglePlay type={StoreType.white} />);
    expect(getByTestId("whiteGooglePlay")).toBeInTheDocument();
  });
});
