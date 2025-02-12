import { css } from "../../styled-system/css";

export const authorCardStyles = css({
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  margin: "6rem 0 0",
  md: {
    flexDirection: "row",
  },
});

export const imageContainerStyles = css({
  display: "flex",
  width: "100%",
  height: "8rem",
  minWidth: "8rem",
  margin: "0 2rem 0 0",
  md: {
    width: "8rem",
    height: "auto",
    margin: "0 2rem 0 0",
    alignItems: "center",
  },
});

export const imageStyles = css({
  position: "absolute",
  width: "8rem",
  height: "8rem",
  borderRadius: "0.8rem",
  overflow: "hidden",
});

export const imageElementStyles = css({
  objectFit: "cover",
});

export const bioContainerStyles = css({
  margin: "-1.6rem 0 0",
});
