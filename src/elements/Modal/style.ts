import { css } from "../../style/config";

export const modalContent = css({
  background: "#fff",
  padding: 20,
  zIndex: 9,
  boxShadow:
    "0 6px 16px 0 rgb(0 0 0 / 6%), 0 3px 6px -4px rgb(0 0 0 / 12%), 0 9px 28px 8px rgb(0 0 0 / 5%)",
  borderRadius: 15,
  top: 0,
  pointerEvents: "all",

  variants: {
    open: {
      true: {
        transitionProperty: "visibility, opacity",
        transitionDuration: "0s, 0.5s",

        // /**
        //  * remove taking space from document
        //  * TODO: find a better way to do that
        //  */
        // position: "absolute",
        // right: -99999,
      },
      false: {
        opacity: 0,
        visibility: "hidden",
        transitionDelay: "0s, 0.5s",
        transitionDuration: "0.5s, 0s",
        transitionProperty: "opacity, visibility",
      },
    },
  },
  defaultVariants: {
    open: false,
  },
});

export const modalContentHeader = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const modalContentBody = css({
  width: 480,
  height: 480,
  overflowY: "auto",
});

export const modalContainer = css({
  width: "100%",
  height: "100vh",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 10,
  pointerEvents: "none",
  variants: {
    open: {
      true: {
        pointerEvents: "all",
      },
      false: {
        pointerEvents: "none",
      },
    },
  },

  defaultVariants: {
    open: false,
  },
});

export const modalMask = css({
  width: "100%",
  height: "100%",
  background: "#000",
  opacity: 0.45,

  position: "fixed",
  top: 0,
  pointerEvents: "all",
  visibility: "visible",

  variants: {
    open: {
      false: {
        visibility: "hidden",
      },
    },
  },

  defaultVariants: {
    open: false,
  },
});

export const crossIcon = css({
  width: "2.5em",
  height: "2.5em",
  cursor: "pointer",
  pointerEvents: "all",
});
