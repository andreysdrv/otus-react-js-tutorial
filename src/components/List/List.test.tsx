import React from "react";
import { render, screen } from "@testing-library/react";
import { List } from "./List";
import MOCK_PRODUCTS_LIST from "../../utils/_ProductsList.json";
import { IProduct } from "../../types/types";
import { ProductItem } from "../ProductItem";

describe("List's component tests", () => {
  test("Mock List component render test", () => {
    render(
      <List
        items={MOCK_PRODUCTS_LIST.products}
        renderItem={(product: IProduct) => (
          <ProductItem product={product} key={product.id} />
        )}
        className={"products-list"}
      />
    );
    const list = screen.getByTestId("list");
    expect(list).toBeInTheDocument();
  });

  test("Empty List component render test", () => {
    render(
      <List
        items={[]}
        renderItem={(product: IProduct) => (
          <ProductItem product={product} key={product.id} />
        )}
        className={"products-list"}
      />
    );
    const list = screen.getByTestId("list");
    expect(list).toBeInTheDocument();
  });
});
