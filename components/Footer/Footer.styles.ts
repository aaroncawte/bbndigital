import { css } from "../../styled-system/css";

export const footerStyles = css({
  fontFamily: "Staatliches",
  width: "100%",
  height: "6rem",
  padding: "2rem 0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  fontSize: "0.9rem",
  color: "grey.2",
  _osDark: {
    color: "offBlack.wash",
  },
});

export const footerLogotypeStyles = css({
  fontSize: "1.4rem",
  lineHeight: "3rem",
});
