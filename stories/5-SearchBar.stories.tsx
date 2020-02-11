import React from "react";
import { storiesOf } from "@storybook/react";
import { SearchBar } from "../src";

const stories = storiesOf("SearchBar", module);

stories.add("default", () => <SearchBar />, {
  info: { inline: true }
});
