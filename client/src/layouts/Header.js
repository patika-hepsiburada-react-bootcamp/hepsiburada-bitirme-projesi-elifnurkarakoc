import { Logo,SearchInput } from "components";
import React from "react";
import styles from "layouts/layouts.module.css";


const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <div>
          <Logo />
        </div>
         <SearchInput/>

        {/* <div className={styles.cart_button}>Basket</div> */}
      </div>
    </div>
  );
};

export default Header;
