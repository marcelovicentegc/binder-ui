import React from "react";
import { storiesOf } from "@storybook/react";
import { Binder, BinderSize } from "../src";
import {
  contextMenuItems,
  onClick,
  philosophyBinder,
  planeGeometryBinder,
  naturalSciencesBinder,
  ancientHistoryBinder
} from "../src/mocks";

const stories = storiesOf("Binder", module);

stories.add(
  "default (small)",
  () => {
    return <Binder binder={planeGeometryBinder} onClick={onClick} />;
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
        onClick={onClick}
        size={BinderSize.medium}
      />
    );
  },
  {
    info: { inline: true }
  }
);

stories.add(
  "with custom context menu",
  () => {
    return (
      <Binder
        binder={ancientHistoryBinder}
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
  "disabled binder",
  () => {
    return <Binder binder={naturalSciencesBinder} disabled />;
  },
  {
    info: { inline: true }
  }
);
