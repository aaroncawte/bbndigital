import { css } from "../../styled-system/css";

export const emailFormStyles = css({
  display: "flex",
  flexDirection: "column",
  margin: "2.4rem 0",
});

export const onelineFormStyles = css({
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",
});

export const hiddenLabelStyles = css({
  position: "absolute !important",
  width: "1px !important",
  height: "1px !important",
  padding: "0 !important",
  margin: "-1px !important",
  overflow: "hidden !important",
  clip: "rect(0,0,0,0) !important",
  whiteSpace: "nowrap !important",
  border: "0 !important",
});
