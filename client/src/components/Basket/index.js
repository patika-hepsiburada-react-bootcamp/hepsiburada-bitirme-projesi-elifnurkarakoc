import React, { useState } from "react";
import styles from "./index.module.css";
import { useSelector } from "react-redux";
import { BasketContent } from "components";

const Basket = () => {
  const [hover, setHover] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div
      className={styles.basket}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <button type="button" className={styles.basketButton}>
        <p className={styles.basketText}>Sepetim</p>
        <div className={styles.basketBadge}>{cartItems && cartItems.length}</div>
      </button>
      {hover && (
        <div className={styles.basketContent}>
          <BasketContent />
        </div>
      )}
    </div>
  );
};

export default Basket;
