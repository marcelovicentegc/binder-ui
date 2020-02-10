import React from "react";
import { storiesOf } from "@storybook/react";
import { Menu } from "../src";
import { menuItems } from "../src/mocks";

const stories = storiesOf("Menu", module);

stories.add(
  "last two menu items under withArrow mode and every other under section mode",
  () => <Menu menuItems={menuItems} topSpace={20} rightSpace={0} showMenu />,
  {
    info: { inline: true }
  }
);
