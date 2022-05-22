import React from "react";
import Cell from "./Cell";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CELLS } from "../utils/config";

export default {
  component: Cell,
  title: "Cell",
  decorators: [(story) => <div style={{ padding: "1rem" }}>{story()}</div>],
} as ComponentMeta<typeof Cell>;

const Template: ComponentStory<typeof Cell> = (args) => <Cell {...args} />;

export const Clickable = Template.bind({});
Clickable.args = {
  value: CELLS[0],
};

export const Styled = Template.bind({});
Styled.args = {
  value: Cell,
  className: "cell",
};
