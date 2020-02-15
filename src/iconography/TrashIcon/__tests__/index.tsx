import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { TrashIcon } from "..";

describe("<TrashIcon /> test case", () => {
  test("test id is in the document", () => {
    const { getByTestId } = render(<TrashIcon />);
    expect(getByTestId("trashIcon")).toBeInTheDocument();
  });
});
