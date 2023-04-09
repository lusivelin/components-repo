import { globalCss } from "./config";

export const resetCSS = globalCss({
  "*": {
    boxSizing: "border-box",
    scrollBehavior: "smooth",
  },

  "html, body": {
    width: "100%",
    height: "100%",

    boxSizing: "border-box",

    margin: 0,
    padding: 0,
  },

  body: {
    overflowY: "auto",
    overflowX: "hidden",

    "&.no-scroll": {
      overflow: "hidden",
    },
    margin: 0,
    padding: 0,
  },

  "img, svg": {
    verticalAlign: "baseline",
  },

  ".nowrap": {
    whiteSpace: "nowrap",
  },
  "p, ol, ul, li, dl, dt, dd, blockquote, figure, fieldset, legend, textarea, pre, iframe, hr, h1, h2, h3, h4, h5, h6":
    {
      margin: 0,
      padding: 0,
    },

  "h1, h2, h3, h4, h5, h6": {
    fontSize: "100%",
    fontWeight: "normal",
  },

  ul: {
    listStyle: "none",
  },

  "button, input, select": {
    margin: 0,
  },
  "*, *::before, *::after": {
    boxSizing: "inherit",
  },

  "img, video": {
    height: "auto",
    maxWidth: "100%",
  },

  iframe: {
    border: 0,
  },

  table: {
    borderCollapse: "collapse",
    borderSpacing: 0,
  },

  "td, th": {
    padding: 0
  },
});
