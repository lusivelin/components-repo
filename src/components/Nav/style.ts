import { css } from "@/style/config";

export const container = css({
  // background: "#fff",
  // defaultVariants: {
  //   active: false
  // },
});

export const wrapper = css({
  background: "#333",
  width: 220,
  height: "100vh",
  transition: "width 0.5s 0.2s ease",
  variants: {
    active: {
      true: {
        width: 220,
      },
      false: {
        width: 120,
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
  [`a`]: {
    display: "flex",
    boxShadow: "0 20px 27px 0 rgba(0,0,0,.05)",
    borderRadius: "0.5rem",
    alignItems: "center",
    whiteSpace: "nowrap",
    color: "#344767",
    backgroundColor: "#fff",
  },
});

export const icon = css({
  display: "flex",
  alignItems: "center",
  borderRadius: "0.5rem",
  backgroundColor: "#fff",
  boxShadow: "0 .3125rem .625rem 0 rgba(0,0,0,.12) !important",

  // width: 26,
  // height: 26,
  padding: 10,
  [`svg`]: {
    // width: 16,
    // height: 16,
  },
  // backgroundPosition: "50%"
});

// .line {
//   fill: none;
//   stroke: #333;
//   stroke-width: 6;
//   transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
//     stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
// }
// .line1 {
//   stroke-dasharray: 60 207;
//   stroke-width: 6;
// }
// .line2 {
//   stroke-dasharray: 60 60;
//   stroke-width: 6;
// }
// .line3 {
//   stroke-dasharray: 60 207;
//   stroke-width: 6;
// }
// .opened .line1 {
//   stroke-dasharray: 90 207;
//   stroke-dashoffset: -134;
//   stroke-width: 6;
// }
// .opened .line2 {
//   stroke-dasharray: 1 60;
//   stroke-dashoffset: -30;
//   stroke-width: 6;
// }
// .opened .line3 {
//   stroke-dasharray: 90 207;
//   stroke-dashoffset: -134;
//   stroke-width: 6;
// }
