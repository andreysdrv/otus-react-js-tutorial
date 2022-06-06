import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("App component render test", () => {
  render(<App />);
  const text = screen.getByTestId("main");
  expect(text).toBeInTheDocument();
});
