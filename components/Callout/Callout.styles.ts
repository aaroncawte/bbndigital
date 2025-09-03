import { css, cva } from "../../styled-system/css";

export enum CalloutVariants {
  OFFBLACK = "offBlack",
  PINK = "pink",
  PURPLE = "purple",
  BLUE = "blue",
  YELLOW = "yellow",
}

export const calloutStyles = cva({
  base: {
    position: "relative",
    display: "block",
    width: "100%",
    padding: ["0 1.2rem 0.8rem", "0.8rem 1.6rem 0.8rem"],
    margin: "2.4rem 0",
    boxSizing: "border-box",
    borderWidth: 0,
    borderStyle: "solid",
    borderTopWidth: "2.4rem",
    borderRadius: "0.4rem",
    md: {
      padding: "0.8rem 1.6rem 0.8rem",
      borderTopWidth: "0",
      borderLeftWidth: "2.4rem",
    },
  },
  variants: {
    variant: {
      ...["offBlack", "pink", "purple", "blue", "yellow"].reduce(
        (acc, variant) =>
          // prettier-ignore
          // @ts-expect-error: Cursed reduce function
          ((acc[variant] = {
              borderColor: `${variant}.main`,
              backgroundColor: `${variant}.wash`,
              _osDark: {
                borderColor: `${variant}.main`,
                backgroundColor: `${variant}.tint`,
              },
              _a: {
                textDecorationColor: `${variant}.main !important`,
                "&:hover": {
                  color: `${variant}.main !important`,
                  textDecorationColor: `${variant}.main !important`,
                },
                "&:focus": {
                  color: `${variant}.main !important`,
                  textDecorationColor: `${variant}.main !important`,
                },
              },
            }),
            acc),
        {},
      ),
    },
  },
});

export const calloutIconStyles = css({
  position: "absolute",
  left: "calc(50% - 0.8rem)",
  top: "-2rem",
  width: "1.6rem",
  height: "1.6rem",
  md: {
    top: "calc(50% - 0.8rem)",
    left: "-2rem",
  },
});
