import React from "react";
import { storiesOf } from "@storybook/react";
import { TextToolbar } from "../src";
import { bodyTextOptions, textStyleOptions } from "../src/mocks";

const stories = storiesOf("TextToolbar", module);

stories.add("default", () => <TextToolbar />, {
  info: { inline: true }
});

stories.add(
  "with ability to select the body text",
  () => (
    <TextToolbar
      bodyText={{
        label: "Body text",
        options: [
          "Title",
          "Subtitle 1",
          "Subtitle 2",
          "Body text",
          "Enumeration",
          "List",
          "Quote"
        ]
      }}
    />
  ),
  {
    info: { inline: true }
  }
);

stories.add(
  "with ability to select the text color",
  () => (
    <TextToolbar
      bodyText={{ label: "Body text", options: bodyTextOptions }}
      textColor={{ menuTitle: "Text color" }}
    />
  ),
  {
    info: { inline: true }
  }
);

stories.add(
  "with ability to select the text box color",
  () => (
    <TextToolbar
      bodyText={{ label: "Body text", options: bodyTextOptions }}
      textColor={{ menuTitle: "Text color" }}
      textBoxColor={{ menuTitle: "Text box color" }}
    />
  ),
  {
    info: { inline: true }
  }
);

stories.add(
  "with ability to select the text box style",
  () => (
    <TextToolbar
      bodyText={{ label: "Body text", options: bodyTextOptions }}
      textColor={{ menuTitle: "Text color" }}
      textBoxColor={{ menuTitle: "Text box color" }}
      textBoxStyle={{ menuTitle: "Text box style" }}
    />
  ),
  {
    info: { inline: true }
  }
);

stories.add(
  "with ability to select the text style",
  () => (
    <TextToolbar
      bodyText={{ label: "Body text", options: bodyTextOptions }}
      textColor={{ menuTitle: "Text color" }}
      textBoxColor={{ menuTitle: "Text box color" }}
      textBoxStyle={{ menuTitle: "Text box style" }}
      textStyle={{
        menuTitle: "Text styles",
        scopes: [
          {
            trads: "Tradicionals"
          },
          {
            classics: "Classics"
          },
          {
            handWritten: "Hand written"
          }
        ],
        options: textStyleOptions
      }}
    />
  ),
  {
    info: { inline: true }
  }
);
