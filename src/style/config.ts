import { createStitches } from "@stitches/core";

export const { globalCss, css, keyframes, createTheme } = createStitches({
  prefix: "vortex",
  theme: {
    shadows: {
      element:
        "0 6px 16px 0 rgb(0 0 0 / 8%), 0 3px 6px -4px rgb(0 0 0 / 8%), 0 9px 28px 8px rgb(0 0 0 / 4%)",
      component:
        "0 6px 16px 0 rgb(0 0 0 / 18%), 0 3px 6px -4px rgb(0 0 0 / 12%), 0 9px 28px 8px rgb(0 0 0 / 6%)",
      item: "0 20px 27px 0 rgba(0,0,0,.05)",
    },
    colors: {
      text: "#050505",
      background: "#fafafa",
      primary: "#95d6ba",
      secondary: "#dae4f1",
      acent: "#48b789",
    },
    zIndices: {
      heaven: 100,
      sky: 10,
      ground: 0,
      underGround: -10,
      hell: -100,
    },
    transitions: {
      fadeIn: "all 0.5s ease",
    },
  },
});

export const darkTheme = createTheme("dark", {
  colors: {
    text: "#fafafa",
    background: "#050505",
    primary: "#95d6ba",
    secondary: "#0e1825",
    acent: "#91d4b8",
  },
});
