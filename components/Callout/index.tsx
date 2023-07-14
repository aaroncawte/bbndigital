import { ReactNode } from "react";
import { CalloutStyled, CalloutVariants, CalloutIcon } from "./Callout.styled";

type CalloutProps = {
  children: ReactNode;
  variant: CalloutVariants;
};

const defaultIcon = {
  [CalloutVariants.OFFBLACK]: {
    src: "format_quote",
    alt: "Double quote",
  },
  [CalloutVariants.PINK]: {
    src: "star",
    alt: "Star",
  },
  [CalloutVariants.PURPLE]: {
    src: "bookmark",
    alt: "Bookmark",
  },
  [CalloutVariants.BLUE]: {
    src: "start",
    alt: "Arrow pointing right",
  },
  [CalloutVariants.YELLOW]: {
    src: "lightbulb",
    alt: "Light bulb",
  },
};

const Callout = ({ children, variant }: CalloutProps) => (
  <CalloutStyled variant={variant}>
    <CalloutIcon
      width={24}
      height={24}
      src={`/img/material-icons/${defaultIcon[variant].src}_FILL1_wght400_GRAD0_opsz20.svg`}
      alt={defaultIcon[variant].alt}
    />
    {children}
  </CalloutStyled>
);

export default Callout;
