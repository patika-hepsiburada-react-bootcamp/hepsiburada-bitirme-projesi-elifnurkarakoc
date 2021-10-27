import React from "react";
import styles from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "redux/slices/CartSlice";
const ProductHover = (product) => {
  console.log({ product });
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addProductToCart(product));
  };

  return (
    <div className={styles.product}>
      <div className={styles.productWrapper}>
        <div className={styles.image}>
          <img src={product.image} alt="" />
        </div>
        <div className={styles.title}>{product.name}</div>

        <div className={styles.buttons}>
          {cartItems && cartItems?.some((item) => item.id === product.id) && (
            <>
              <button className={styles.passiveButton}>
                Bu ürünü sepete ekleyemezsiniz.
              </button>
            </>
          )}

          {!cartItems?.some((item) => item.id === product.id) && (
            <>
              <button className={styles.addButton} onClick={handleClick}>
                Sepete Ekle
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductHover;
