import { css } from "../../stitches.config";

export const button = css({
    outlineColor: "transparent",
    border: "none",
    padding: 10,
    boxShadow: "$element",
    borderRadius: 5,
    cursor: "pointer",

    color: "$text-white",
    "&:hover": {
        filter: "brightness(110%)",
        boxShadow: "none",
    },

    variants: {

    },
    defaultVariants: {

    }
})