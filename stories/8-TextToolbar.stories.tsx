import React from "react";
import { storiesOf } from "@storybook/react";
import { TextToolbar } from "../src";

const stories = storiesOf("TextToolbar", module);

stories.add("default", () => <TextToolbar />, {
  info: { inline: true }
});
