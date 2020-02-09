import React from "react";
import { storiesOf } from "@storybook/react";
import { Input, InputType } from "../src";

const stories = storiesOf("Input", module);

stories.add("default (primary)", () => <Input />, {
  info: { inline: true }
});

stories.add(
  "primary with placeholder",
  () => <Input inputProps={{ placeholder: "School name" }} />,
  {
    info: { inline: true }
  }
);

stories.add("secondary", () => <Input type={InputType.secondary} />, {
  info: { inline: true }
});

stories.add(
  "secondary with label",
  () => <Input label={"Email"} type={InputType.secondary} />,
  {
    info: { inline: true }
  }
);

stories.add(
  "secondary with label and placeholder",
  () => (
    <Input
      label={"Email"}
      type={InputType.secondary}
      inputProps={{
        placeholder: "example@email.com"
      }}
    />
  ),
  {
    info: { inline: true }
  }
);
