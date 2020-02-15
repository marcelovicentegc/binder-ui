import React from "react";
import { storiesOf } from "@storybook/react";
import { Binder, BinderSize } from "../src";
import {
  contextMenuItems,
  onClick,
  philosophyBinder,
  planeGeometryBinder
} from "../src/mocks";

const stories = storiesOf("Binder", module);

stories.add(
  "default (small)",
  () => {
    return (
      <Binder
        binder={planeGeometryBinder}
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
        binder={philosophyBinder}
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
