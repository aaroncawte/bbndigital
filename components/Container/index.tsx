import { type ReactNode } from "react";

import { ContainerStyled } from "./Container.styled";

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => (
  <ContainerStyled>{children}</ContainerStyled>
);

export default Container;
