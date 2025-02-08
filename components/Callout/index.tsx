import Image from "next/image";
import { type ReactNode } from "react";

import {
  calloutIconStyles,
  calloutStyles,
  CalloutVariants,
} from "./Callout.styles";

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
  // @ts-expect-error: Something about the variant typing isn't right
  <div className={calloutStyles({ variant: variant })}>
    <Image
      className={calloutIconStyles}
      width={24}
      height={24}
      src={`/img/material-icons/${defaultIcon[variant].src}_FILL1_wght400_GRAD0_opsz20.svg`}
      alt={defaultIcon[variant].alt}
    />
    {children}
  </div>
);

export default Callout;
