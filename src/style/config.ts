import { createStitches } from "@stitches/core";

export const { globalCss, css, keyframes } = createStitches({
  prefix: "vortex",
  theme: {
    shadows: {
      element:
        "0 6px 16px 0 rgb(0 0 0 / 8%), 0 3px 6px -4px rgb(0 0 0 / 8%), 0 9px 28px 8px rgb(0 0 0 / 4%)",
      component:
        "0 6px 16px 0 rgb(0 0 0 / 18%), 0 3px 6px -4px rgb(0 0 0 / 12%), 0 9px 28px 8px rgb(0 0 0 / 6%)",
    },
    colors: {
      gray: "#474747",
      primary: "#0077cc",
      secondary: "#ECECEC",
      background: "#F5F5F5",
      link: "#008CBA",
      success: "#52C41A",
      warning: "#FAAD14",
      danger: "#F5222D",

      "text-black": "#333",
      "text-white": "#fff",

      platinum: "#E6E6EA",
      "ghost-white": "#F4F4F8",
      pistachio: "#B4DC7F",
      tomato: "#FE4A49",
      crimson: "#D7263D",
      "oxford-blue": "#02182B",
      "dodger-blue": "#0197F6",
      moonstone: "#009FB7",
      "munsell-blue": "#448FA3",
      "sky-blue": "#68C5DB",
      "space-cadet": "#2D3047",
      "jungle-green": "#419D78",
      "earth-yellow": "#E0A458",
      mustard: "#FED766",
      "light-orange": "#FFDBB5",
      "steel-pink": "#C04ABC",
      "air-force-blue": "#628395",
      beaver: "#96897B",
      buff: "#CF995F",
      citron: "#D0CE7C",
    },
  },
});
