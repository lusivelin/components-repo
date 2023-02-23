import { css } from "../../stitches.config";

export const tabContentArea = css({
  background: "#fff",
  width: "100%",
  justifyContent: "center",
  display: "flex",
  variants: {
    active: {
      true: {
        transitionProperty: "visibility, opacity",
        transitionDuration: "0s, 0.5s",
      },
      false: {
        opacity: 0,
        visibility: "hidden",
        transitionDelay: "0s, 0.5s",
        transitionDuration: "0.5s, 0s",
        transitionProperty: "opacity, visibility",

        /**
         * remove taking space from document
         * TODO: find a better way to do that
         */
        position: "absolute",
        right: -99999,
      },
    },
  },
  defaultVariants: {
    active: false,
  },
});

export const tabControlGroup = css({
  display: "flex",
  justifyContent: "center",
  gap: 10,
});

export const tabContentAreaGroup = css({
  display: "flex",
  justifyContent: "center",
  gap: 10,
});
