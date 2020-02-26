import React from "react";
import { storiesOf } from "@storybook/react";
import { Menu, theme } from "../src";
import { menuItems } from "../src/mocks";

const stories = storiesOf("Menu", module);

stories.add(
  "last two menu items under withArrow mode and every other under section mode",
  () => <Menu menuItems={menuItems} topSpace={20} rightSpace={0} showMenu />,
  {
    info: { inline: true }
  }
);

stories.add(
  "positioning element via props",
  () => <Menu menuItems={menuItems} topSpace={50} rightSpace={20} showMenu />,
  {
    info: { inline: true }
  }
);

stories.add(
  "custom menu",
  () => (
    <Menu
      menuItems={menuItems}
      topSpace={20}
      rightSpace={0}
      showMenu
      style={{
        width: "60vw",
        backgroundColor: theme.color.white2,
        borderRadius: "0px"
      }}
    />
  ),
  {
    info: { inline: true }
  }
);
