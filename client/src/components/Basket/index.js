import React from "react";
import styles from "./index.module.css";
const Basket = () => {
  return (
    <div className={styles.basket}>
      <button type="button" className={styles.basket_button}>
        <span className={styles.basket_text}>Sepetim</span>
        <span className={styles.basket_badge}>8</span>
      </button>
    </div>
  );
};

export default Basket;
