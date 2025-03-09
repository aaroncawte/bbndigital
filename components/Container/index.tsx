import { type ReactNode } from "react";

import { containerStyles } from "./Container.styles";

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => (
  <div className={containerStyles}>{children}</div>
);

export default Container;
