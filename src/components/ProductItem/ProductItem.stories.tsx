import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ProductItem } from "./ProductItem";
import MOCK_PRODUCTS_LIST from "../../utils/_ProductsList.json";

export default {
  title: "UI/ProductItem",
  component: ProductItem,
} as ComponentMeta<typeof ProductItem>;

export const Default: ComponentStory<typeof ProductItem> = () => {
  return <ProductItem product={MOCK_PRODUCTS_LIST.products[0]} />;
};
