import { ReactNode } from "react";
import styles from "./Container.module.css";

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => (
  <div className={styles.Container}>{children}</div>
);

export default Container;
