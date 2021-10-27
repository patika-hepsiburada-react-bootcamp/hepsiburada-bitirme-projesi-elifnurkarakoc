import React, { useState } from "react";
import styles from "./index.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { addProductToCart, } from "redux/slices/CartSlice";
import { ProductHover } from "components";
const Product = (product) => {
  const [hover, setHover] = useState(false);
  // const { cartItems } = useSelector((state) => state.cart);
  // const dispatch = useDispatch();

  const discountPrice = (value) =>
    (value - (value * product.discountPercentage) / 100).toFixed(2);

  // const handleClick = () => {
  //   dispatch(addProductToCart(product));

  // };

  return (
    <div
      className={styles.product}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {!hover && (
        <div className={styles.productWrapper}>
          <div className={styles.productImage}>
            <img src={product.image} alt="" />
          </div>
          <div className={styles.productContent}>
            <div className={styles.title}>{product.name}</div>{" "}
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
              {discountPrice(product.price)} TL
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
      {hover && <ProductHover {...product} />}
    </div>
  );
};

export default Product;
