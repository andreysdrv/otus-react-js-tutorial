import React from "react";
import Field from "./Field";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CELLS, FIELD_SIZE } from "../utils/config";

export default {
  component: Field,
  title: "Field",
  decorators: [(story) => <div style={{ padding: "1rem" }}>{story()}</div>],
} as ComponentMeta<typeof Field>;

const Template: ComponentStory<typeof Field> = (args) => <Field {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: FIELD_SIZE,
  values: CELLS,
};
