import { css } from "@/style/config";

export const container = css({
  display: "flex",
  background: "$background",
  transition: "$fadeIn",
  color: "$text",
  variants: {},
  defaultVariants: {},
});

export const contentGrid = css({
  width: "calc(100% - 88px)",
  display: "grid",
  height: "100vh",
  gridTemplateRows: `
    auto
    1fr
  `,
  transition: "transform 0.4s 0.2s",
  variants: {
    active: {
      true: {
        transform: "translateX(200px)",
      },
      false: {
        transform: "translateX(88px)",
      },
    },
  },
});

export const darkOverlay = css({
  background: "#000",
  position: "absolute",
  width: "100%",
  height: "100%",
  zIndex: "$sky",

  transition: "opacity 0s 0.5s ease",
  variants: {
    active: {
      true: {
        opacity: 0.5,
        visibility: "visible",
        transition: "opacity 0.4s 0.2s",
      },
      false: {
        visibility: "hidden",
        opacity: 0,
        transition: "visibility 0s 0.5s, opacity 0.4s 0.2s",
      },
    },
  },
});

export const contentGridItem = css({
  // gridColumnStart: ""
});

export const content = css({});
