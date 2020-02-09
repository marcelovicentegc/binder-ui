import React from "react";
import { configure, addDecorator, addParameters } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/utils/Theme";
import storyBookTheme from "./theme";

addParameters({
  options: {
    theme: storyBookTheme
  }
});

// automatically import all files ending in *.stories.tsx
configure(require.context("../", true, /\.stories\.tsx?$/), module);
addDecorator(renderStory => (
  <ThemeProvider theme={theme}>{renderStory()}</ThemeProvider>
));
