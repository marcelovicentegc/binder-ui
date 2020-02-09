import React from "react";
import { storiesOf } from "@storybook/react";
import { Title, Subtitle, H1, H2, H3, Label1, Label2, Spotlight } from "../src";

const stories = storiesOf("Typography", module);

stories.add("Title", () => <Title>Hello world!</Title>, {
  info: { inline: true }
});

stories.add("Subtitle", () => <Subtitle>Hello world!</Subtitle>, {
  info: { inline: true }
});

stories.add("H1", () => <H1>Hello world!</H1>, {
  info: { inline: true }
});

stories.add("H2", () => <H2>Hello world!</H2>, {
  info: { inline: true }
});

stories.add("H3", () => <H3>Hello world!</H3>, {
  info: { inline: true }
});

stories.add("Label1", () => <Label1>Hello world!</Label1>, {
  info: { inline: true }
});

stories.add("Label2", () => <Label2>Hello world!</Label2>, {
  info: { inline: true }
});

stories.add("Spotlight", () => <Spotlight>Hello world!</Spotlight>, {
  info: { inline: true }
});
