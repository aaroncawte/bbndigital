import React from "react";
import Container from "../Container";
import styles from "./Navigation.module.css";

const Navigation = () => (
  <nav className={styles.nav}>
    <Container>
      <div className={styles.navContainer}>
        <div className={styles.navTitle}>
          <a href="/" title="Home - bbn.digital">
            <h1 className={styles.navH1}>bbn.digital</h1>
          </a>
        </div>
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
