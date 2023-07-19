import { css } from "@/style/config";

export const tabContainer = css({});

export const tabControlGroup = css({
  display: "flex",
  justifyContent: "center",
  gap: 10,
});

export const tabContentAreaGroup = css({
  display: "flex",
  justifyContent: "center",
  gap: 10,
  background: "#fff",
  width: "100%",
  "& > article": {
    background: "#fff",
    width: "100%",
    justifyContent: "center",
    display: "flex",
  },
  "& > article.tab": {
    opacity: 0,
    visibility: "hidden",
    transitionDelay: "0s, 0.5s",
    transitionDuration: "0.5s, 0s",
    transitionProperty: "opacity, visibility",

    position: "fixed",
  },
  "& > article.tab-active": {
    transitionProperty: "visibility, opacity",
    transitionDuration: "0s, 0.5s",
  },
});
