import React from "react";
import { storiesOf } from "@storybook/react";
import { TextToolbar, theme } from "../src";
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
        options: bodyTextOptions
      }}
    />
  ),
  {
    info: { inline: true }
  }
);

stories.add(
  "with ability to select the text color",
  () => {
    const [textColor, setTextColor] = React.useState("");

    return (
      <TextToolbar
        bodyText={{ label: "Body text", options: bodyTextOptions }}
        textColor={{
          menuTitle: "Text color",
          color: textColor,
          onChange: color => setTextColor(color)
        }}
      />
    );
  },
  {
    info: { inline: true }
  }
);

stories.add(
  "with ability to select the text box color",
  () => {
    const [textColor, setTextColor] = React.useState("");
    const [textBoxColor, setTextBoxColor] = React.useState("");

    return (
      <TextToolbar
        bodyText={{ label: "Body text", options: bodyTextOptions }}
        textColor={{
          menuTitle: "Text color",
          color: textColor,
          onChange: color => setTextColor(color)
        }}
        textBoxColor={{
          menuTitle: "Text box color",
          color: textBoxColor,
          onChange: color => setTextBoxColor(color)
        }}
      />
    );
  },
  {
    info: { inline: true }
  }
);

stories.add(
  "with ability to select the text box style",
  () => {
    const [textColor, setTextColor] = React.useState("");
    const [textBoxColor, setTextBoxColor] = React.useState("");

    return (
      <TextToolbar
        bodyText={{ label: "Body text", options: bodyTextOptions }}
        textColor={{
          menuTitle: "Text color",
          color: textColor,
          onChange: color => setTextColor(color)
        }}
        textBoxColor={{
          menuTitle: "Text box color",
          color: textBoxColor,
          onChange: color => setTextBoxColor(color)
        }}
        textBoxStyle={{
          menuTitle: "Text box style"
        }}
      />
    );
  },
  {
    info: { inline: true }
  }
);

stories.add(
  "with ability to select the text style",
  () => {
    const [textColor, setTextColor] = React.useState("");
    const [textBoxColor, setTextBoxColor] = React.useState("");

    return (
      <TextToolbar
        bodyText={{ label: "Body text", options: bodyTextOptions }}
        textColor={{
          menuTitle: "Text color",
          color: textColor,
          onChange: color => setTextColor(color)
        }}
        textBoxColor={{
          menuTitle: "Text box color",
          color: textBoxColor,
          onChange: color => setTextBoxColor(color)
        }}
        textBoxStyle={{
          menuTitle: "Text box style"
        }}
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
    );
  },
  {
    info: { inline: true }
  }
);
