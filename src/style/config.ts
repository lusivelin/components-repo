import { createStitches } from "@stitches/core";

export const { globalCss, css, keyframes, createTheme } = createStitches({
  prefix: "vortex",
  theme: {
    shadows: {
      element:
        "0 6px 16px 0 rgb(0 0 0 / 8%), 0 3px 6px -4px rgb(0 0 0 / 8%), 0 9px 28px 8px rgb(0 0 0 / 4%)",
      component:
        "0 6px 16px 0 rgb(0 0 0 / 18%), 0 3px 6px -4px rgb(0 0 0 / 12%), 0 9px 28px 8px rgb(0 0 0 / 6%)",
    },
    colors: {
      text: "black",
      background: "white",
    },
  },
});

export const darkTheme = createTheme("dark", {
  colors: {
    text: "white",
    background: "black",
  },
});
