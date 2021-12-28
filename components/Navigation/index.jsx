import React from "react";
import Container from "../Container";
import styles from "./Navigation.module.css";

const Navigation = () => (
  <nav className={styles.nav}>
    <Container>
      <div className={styles.navContainer}>
        <a href="/" title="Home - bbn.digital">
          <div className={styles.logo} />
        </a>
        <ul className={styles.menu}>
          {/* <li>
            <a href="/posts" title="Words">
              Words
            </a>
          </li> */}
        </ul>
      </div>
    </Container>
  </nav>
);

export default Navigation;
