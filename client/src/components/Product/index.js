import React, { useState } from "react";
import styles from "./index.module.css";
const Product = ({ name, image, brand, color, price, discountPercentage }) => {
  const [hover, setHover] = useState(false);
  const discountPrice = (value) =>
    (value - (value * discountPercentage) / 100).toFixed(2);

  return (
    <div
      className={styles.product}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={styles.product_container}>
        <div className={styles.product_image}>
          <img src={image} alt="" />
        </div>
        <div className={styles.title}>{name}</div>
        {!hover && (
          <>
            {" "}
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
          </>
        )}
        {hover && (
          //TODO: add  basket control
          // <>
          //   <button className={styles.add_cart_button}>Sepete Ekle</button>
          // </>
          <>
            <button className={styles.passive_button}>
              Bu ürünü sepete ekleyemezsiniz.
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Product;
