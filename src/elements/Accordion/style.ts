import { css } from "../../style/config";

export const accordionContainer = css({
  background: "#fff",
});

export const accordionControl = css({
  zIndex: 10,
  position: "relative",
  width: "100%",

  outlineColor: "transparent",
  border: "none",
  cursor: "pointer",
  height: 40,
});

export const accordionBody = css({
  background: "#fff",
  width: "100%",
  justifyContent: "center",
  display: "flex",

  variants: {
    open: {
      true: {
        transitionProperty: "visibility, transform",
        transitionDuration: "0s, 0.5s",
      },
      false: {
        transform: "translateY(-100%)",
        visibility: "hidden",
        transitionDelay: "0s, 0.5s",
        transitionDuration: "0.5s, 0s",
        transitionProperty: "transform, visibility",

        position: "fixed",
      },
    },
  },
  defaultVariants: {
    open: false,
  },
});

export const accordionContent = css({});
