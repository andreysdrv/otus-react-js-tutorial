import React, { ChangeEvent, FormEvent, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AddForm } from "./AddForm";

export default {
  title: "UI/AddForm",
  component: AddForm,
} as ComponentMeta<typeof AddForm>;

export const Default: ComponentStory<typeof AddForm> = () => {
  const [value, setValue] = useState<string>("");

  return (
    <AddForm
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setValue("");
      }}
    />
  );
};
