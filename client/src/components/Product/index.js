import React, { useState } from "react";
import styles from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, } from "redux/slices/CartSlice";
const Product = (product) => {
  const [hover, setHover] = useState(false);
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  

  const discountPrice = (value) =>
    (value - (value * product.discountPercentage) / 100).toFixed(2);

  const handleClick = () => {
    dispatch(addProductToCart(product));

  };

  return (
    <div
      className={styles.product}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={styles.product_container}>
        <div className={styles.product_image}>
          <img src={product.image} alt="" />
        </div>
        <div className={styles.title}>{product.name}</div>
        {!hover && (
          <>
            {" "}
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
              <div className={styles.no_discount_price}>
                <span className={styles.line}> {product.price} TL</span>{" "}
                <span className={styles.red}>
                  {product.discountPercentage}%
                </span>
              </div>
            )}
          </>
        )}
        {hover && items.some((item) => item.id === product.id) && (
          <>
            <button className={styles.passive_button}>
              Bu ürünü sepete ekleyemezsiniz.
            </button>
          </>
        )}

        {hover && !items.some((item) => item.id === product.id) && (
          <>
            <button className={styles.add_cart_button} onClick={handleClick}>
              Sepete Ekle
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Product;
