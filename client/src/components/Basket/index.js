import React, { useState } from "react";
import styles from "./index.module.css";
import { useSelector } from "react-redux";
import { BasketContent } from "components";

const Basket = () => {
  const [hover, setHover] = useState(false);
  const { items } = useSelector((state) => state.cart);

  return (
    <div
      className={styles.basket}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <button type="button" className={styles.basket_button}>
        <span className={styles.basket_text}>Sepetim</span>
        <span className={styles.basket_badge}>{items.length}</span>
      </button>
      {hover && (
        <div className={styles.basket_content}>
          <BasketContent />
        </div>
      )}
    </div>
  );
};

export default Basket;
