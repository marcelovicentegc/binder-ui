import { create } from "@storybook/theming";

export default create({
  base: "light",

  colorPrimary: "hotpink",
  colorSecondary: "deepskyblue",

  // UI
  appBg: "white",
  appContentBg: "ghostwite",
  appBorderColor: "#f7f7f7",
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "black",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: "black",
  barSelectedColor: "black",
  barBg: "white",

  // Form colors
  inputBg: "white",
  inputBorder: "black",
  inputTextColor: "black",
  inputBorderRadius: 4,

  brandTitle: " Binder UI"
  //   brandUrl: 'https://example.com',
  // brandImage: "https://files.slack.com/files-pri/T085TMJ9J-FR9LZG2E4/c.png?pub_secret=958a2d8b82"
});
