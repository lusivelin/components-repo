import { css } from "@/style/config";

export const container = css({
  width: 48,
  height: 48,
  background: "$text",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "$item",
  position: "relative",
  borderRadius: 10,
});

export const position = css({
  display: "flex",
  overflow: "hidden",
  height: 30,
});

export const wrapper = css({
  height: "200%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  transition: "transform 0.5s ease",
  variants: {
    mode: {
      dark: {
        transform: "translateY(-30px)",
      },
      light: {
        transform: "translateY(0)",
      },
    },
  },
});
