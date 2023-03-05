import { ReactNode } from "react";
import { CalloutStyled, CalloutVariants, CalloutIcon } from "./Callout.styled";

type CalloutProps = {
  children: ReactNode;
  variant: CalloutVariants;
};

const defaultIcon = {
  [CalloutVariants.OFFBLACK]: "format_quote",
  [CalloutVariants.PINK]: "star",
  [CalloutVariants.PURPLE]: "bookmark",
  [CalloutVariants.BLUE]: "start",
  [CalloutVariants.YELLOW]: "lightbulb",
};

const Callout = ({ children, variant }: CalloutProps) => (
  <CalloutStyled variant={variant}>
    <CalloutIcon
      width={24}
      height={24}
      src={`/img/material-icons/${defaultIcon[variant]}_FILL1_wght400_GRAD0_opsz20.svg`}
    />
    {children}
  </CalloutStyled>
);

export default Callout;
