import React from "react";
import { storiesOf } from "@storybook/react";
import { Card } from "../src";
import { TypographyCardItems } from "../src/components/TextToolbar/TypographyCardItems";
import { bodyTextOptions } from "../src/mocks";

const stories = storiesOf("Card", module);

stories.add(
  "default",
  () => {
    const [currentItem, setCurrentItem] = React.useState(3);

    return (
      <Card
        children={
          <TypographyCardItems
            setCurrentItem={currentItem => setCurrentItem(currentItem)}
            currentItem={currentItem}
            labels={bodyTextOptions}
          />
        }
        cardProps={{
          style: {
            minWidth: 150
          }
        }}
      />
    );
  },
  {
    info: { inline: true }
  }
);
