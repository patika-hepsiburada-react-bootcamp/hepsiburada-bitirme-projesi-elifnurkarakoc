import React, { useState } from "react";
import styles from "./index.module.css";
import { useSelector } from "react-redux";
import { BasketContent } from "components";

const Basket = () => {
  const [hover, setHover] = useState(false);
  const { basketItems } = useSelector((state) => state.basket);

  return (
    <div
      className={styles.basket}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <button type="button" className={styles.basketButton}>
        <p className={styles.basketText}>Sepetim</p>
        <div className={styles.basketBadge}>{basketItems && basketItems.length}</div>
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
