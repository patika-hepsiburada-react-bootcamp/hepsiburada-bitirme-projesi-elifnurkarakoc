import React from "react";
import styles from "./index.module.css";
const Product = ({ name, image, brand, color, price, discountPercentage }) => {
  const discountPrice = (value) =>
    (value - (value * discountPercentage) / 100).toFixed(2);

  return (
    <div className={styles.product}>
      <div className={styles.product_image}>
        <img src={image} alt="" />
      </div>
      <div className={styles.title}>{name}</div>
      <div className={styles.filter}>
        <div className={styles.info}>
          <p>
            <b>Marka: </b>
            {brand}
          </p>
        </div>
        <div className={styles.info}>
          <p>
            <b>Renk: </b>
            {color}
          </p>
        </div>
      </div>
      <div className={styles.price}>{discountPrice(price)} TL</div>
      {discountPercentage !== 0 && (
        <div className={styles.no_discount_price}>
          <span className={styles.line}> {price} TL</span>{" "}
          <span className={styles.red}>{discountPercentage}%</span>
        </div>
      )}
    </div>
  );
};

export default Product;
