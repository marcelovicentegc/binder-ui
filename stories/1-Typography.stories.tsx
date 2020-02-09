import React from "react";
import { storiesOf } from "@storybook/react";
import { Span } from "../src";

const stories = storiesOf("Typography", module);

stories.add("Span", () => <Span>Hello world!</Span>, {
  info: { inline: true }
});
