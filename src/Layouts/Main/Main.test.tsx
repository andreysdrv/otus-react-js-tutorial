import React from "react";
import { render, screen } from "@testing-library/react";
import { Main } from "./Main";
import { List } from "../../components/List";
import MOCK_PRODUCTS_LIST from "../../utils/_ProductsList.json";
import { IProduct } from "../../types/types";
import { ProductItem } from "../../components/ProductItem";

test("App component render test", () => {
  render(
    <Main
      children={
        <List
          className={"products-list"}
          items={MOCK_PRODUCTS_LIST.products}
          renderItem={(product: IProduct) => (
            <ProductItem key={product.id} product={product} />
          )}
        />
      }
    />
  );
  const main = screen.getByTestId("main");
  expect(main).toBeInTheDocument();
});
