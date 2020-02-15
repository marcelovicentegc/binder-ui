import React from "react";
import { storiesOf } from "@storybook/react";
import { Binder, BinderSize } from "../src";
import { binder, contextMenuItems, onClick } from "../src/mocks";

const stories = storiesOf("Binder", module);

stories.add(
  "default (small)",
  () => {
    return (
      <Binder
        binder={binder}
        contextMenu={contextMenuItems}
        onClick={onClick}
      />
    );
  },
  {
    info: { inline: true }
  }
);

stories.add(
  "medium",
  () => {
    return (
      <Binder
        binder={binder}
        contextMenu={contextMenuItems}
        onClick={onClick}
        size={BinderSize.medium}
      />
    );
  },
  {
    info: { inline: true }
  }
);
