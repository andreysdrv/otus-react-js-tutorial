import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { List } from "./List";
import MOCK_PRODUCTS_LIST from "../../utils/_ProductsList.json";
import { IProduct } from "../../types/types";
import { ProductItem } from "../ProductItem";

export default {
  title: "UI/List",
  component: List,
} as ComponentMeta<typeof List>;

export const Default: ComponentStory<typeof List> = () => {
  return (
    <List
      items={MOCK_PRODUCTS_LIST.products}
      className={"products-list"}
      renderItem={(product: IProduct) => (
        <ProductItem product={product} key={product.id} />
      )}
    />
  );
};
