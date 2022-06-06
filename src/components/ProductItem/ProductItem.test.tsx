import React from "react";
import { render, screen } from "@testing-library/react";
import { ProductItem } from "./ProductItem";
import MOCK_PRODUCTS_LIST from "../../utils/_ProductsList.json";

describe("ProductItem's component tests", () => {
  test("Mock ProductItem component render test", () => {
    render(<ProductItem product={MOCK_PRODUCTS_LIST.products[0]} />);
    const item = screen.getByTestId("item");
    expect(item).toBeInTheDocument();
  });
});
