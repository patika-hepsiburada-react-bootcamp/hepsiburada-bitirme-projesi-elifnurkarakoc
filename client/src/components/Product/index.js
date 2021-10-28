import React, { useState } from "react";
import styles from "./index.module.css";

import { ProductHover } from "components";
const Product = (product) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={styles.product}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {!hover && (
        <div data-testid="product" className={styles.productWrapper}>
          <div className={styles.productImage}>
            <img src={product.image} alt="" />
          </div>
          <div className={styles.productContent}>
            <div className={styles.title}>{product.title}</div>{" "}
            <div className={styles.filter}>
              <div className={styles.info}>
                <p>
                  <b>Marka: </b>
                  {product.brand}
                </p>
              </div>
              <div className={styles.info}>
                <p>
                  <b>Renk: </b>
                  {product.color}
                </p>
              </div>
            </div>
            <div className={styles.price}>
              {product.discountPrice} TL
            </div>
            {product.discountPercentage !== 0 && (
              <div className={styles.noDiscountPrice}>
                <span className={styles.line}> {product.price} TL</span>{" "}
                <span className={styles.red}>
                  {product.discountPercentage}%
                </span>
              </div>
            )}
          </div>
        </div>
      )}
      {hover && <ProductHover data-testid="product-hover" {...product} />}
    </div>
  );
};

export default Product;
