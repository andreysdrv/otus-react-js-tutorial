import React from "react";
import { render, screen } from "@testing-library/react";
import Cell from "./Cell";
import userEvent from "@testing-library/user-event";
import { CELLS } from "../utils/config";

describe("Cell snapshot tests", () => {
  it("base snapshot", () => {
    const { container } = render(
      <Cell content={1} handleCellClick={() => console.log(1)} />
    );
    expect(container).toMatchSnapshot();
  });

  it("some data snapshot", () => {
    const { container } = render(
      <Cell content={1} handleCellClick={() => console.log(1)} />
    );
    expect(container).toMatchSnapshot();
  });

  it("handleCellClick", async () => {
    const handleCellClick = jest.fn();
    const user = userEvent.setup();

    render(<Cell content={CELLS[0]} handleCellClick={handleCellClick} />);

    const cell = screen.getByText(CELLS[0]);
    await user.click(cell);

    expect(handleCellClick).toHaveBeenCalled();
  });
});
