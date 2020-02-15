import baseStyled, { ThemedStyledInterface } from "styled-components";

export const theme = {
  importFontFamily:
    "@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap');",
  useFontFamily: "font-family: IBM Plex Sans, sans-serif;",
  color: {
    primaryBlack: "#262626",
    black1: "#202020",
    black2: "#2B2B2B",
    white1: "#F7F7F7",
    white2: "#DCDDE0", // TODO: move to grey
    white3: "#F5F5F5",
    gray1: "#E9E9E9",
    gray2: "#C4C4C4",
    gray3: "#999999",
    gray4: "#4C4C4C",
    gray5: "#D9D9D9",
    gray6: "8C8C8C",
    gray7: "#4D4D4D",
    gray8: "#E6E6E6",
    gray9: "#5C5C5C",
    gray10: "#EFF6EA",
    red1: "#D24654",
    red2: "#BB3B46",
    red3: "#A52F38",
    red4: "#831D23",
    red5: "#831D23",
    orange1: "#EBA248",
    orange2: "#E2873C",
    orange3: "#D86C30",
    orange5: "#C43618",
    yellow1: "#F4DA4E",
    yellow2: "#EFC841",
    yellow3: "#EAB634",
    yellow4: "#DA7F0D",
    green1: "#5DC957",
    green2: "#4DAE48",
    green3: "#3E933A",
    green4: "#276B24",
    green5: "#0F420E",
    blue1: "#6ACEDF",
    blue2: "#59B5CF",
    blue3: "#479DBF",
    blue4: "#3584AF",
    blue5: "#12538F",
    purple1: "#5A4D80",
    rainbowColors: [
      "#CC0000",
      "#F06D00",
      "#E9CD00",
      "#00BE3A",
      "#439AE5",
      "#5400CE",
      "#5E0096",
      "#EF0067"
    ]
  }
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
