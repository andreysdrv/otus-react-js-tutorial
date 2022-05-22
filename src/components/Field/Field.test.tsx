import React from "react";
import { render } from "@testing-library/react";
import Field from "./Field";

describe("Field snapshot tests", () => {
  it("base snapshot", () => {
    const { container } = render(<Field size={2} values={[1, 2, 3, 4]} />);
    expect(container).toMatchSnapshot();
  });

  it("some data snapshot", () => {
    const { container } = render(<Field size={2} values={[1, 2, 3, 4]} />);
    expect(container).toMatchSnapshot();
  });
});
