import { css } from "@/style/config";

export const container = css({
  padding: 20,
});

export const wrapper = css({
  zIndex: "$heaven",
  background: "$acent",
  position: "fixed",
  height: "100vh",
  transition: "box-shadow 0s 0.4s, width 0.4s 0.2s",
  variants: {
    active: {
      true: {
        boxShadow: "2px 0 5px rgb(0, 0, 0, 0.5)",
        width: 200,
      },
      false: {
        boxShadow: "none",
        width: 88,
      },
    },
  },
});

export const menu = css({
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "column",
  gap: 10,
  variants: {},
  defaultVariants: {},
});

export const menuItem = css({
  width: "100%",
  [`a`]: {
    display: "flex",
    boxShadow: "$item",
    borderRadius: "0.5rem",
    alignItems: "center",
    whiteSpace: "nowrap",
    color: "#344767",
    backgroundColor: "#fff",
    transition: "opacity 1s 1s ease",
    padding: 5,
    textDecoration: "none",
  },
  variants: {
    active: {
      true: {
        [`span`]: {
          overflow: "hidden",
          visibility: "visible",
          opacity: 1,
          transition: "opacity 0.4s 0.2s",
        },
      },
      false: {
        [`span`]: {
          visibility: "hidden",
          opacity: 0,
          transition: "visibility 0s 0.5s, opacity 0.4s 0.2s",
        },
      },
    },
  },
});

export const icon = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "0.5rem",
  backgroundColor: "#333",
  boxShadow: "0 .3125rem .625rem 0 rgba(0,0,0,.12) !important",

  marginRight: 10,
  padding: 10,
  [`svg`]: {
    // width: 16,
    // height: 16,
  },
  // backgroundPosition: "50%"
});
