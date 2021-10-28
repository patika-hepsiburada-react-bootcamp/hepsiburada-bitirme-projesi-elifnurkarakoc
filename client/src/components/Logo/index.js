import React from "react";
import styles from "./index.module.css";
import { HepsiburadaIcon } from "icons";
const Logo = () => {
  return (
    <div data-testid="logo" className={styles.logo}>
      <HepsiburadaIcon />
    </div>
  );
};

export default Logo;
