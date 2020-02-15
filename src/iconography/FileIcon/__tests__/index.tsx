import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { FileIcon } from "..";

describe("<FileIcon/> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<FileIcon />);
    expect(getByTestId("fileIcon")).toBeInTheDocument();
  });
});
