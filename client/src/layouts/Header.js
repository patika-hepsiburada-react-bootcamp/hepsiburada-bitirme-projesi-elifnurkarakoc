import { Logo, SearchInput, Basket } from "components";
import React from "react";
import styles from "layouts/layouts.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <SearchInput />
      <Basket />
    </div>
  );
};

export default Header;
