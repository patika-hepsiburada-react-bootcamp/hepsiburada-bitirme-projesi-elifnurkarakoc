import React from "react";
import styles from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addProductToBasket } from "redux/slices/BasketSlice";
const ProductHover = (product) => {
  console.log({ product });
  const { basketItems } = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addProductToBasket(product));
  };

  return (
    <div data-testid="product-hover" className={styles.product}>
      <div className={styles.productWrapper}>
        <div className={styles.image}>
          <img src={product.image} alt="" />
        </div>
        <div className={styles.title}>{product.title}</div>

        <div  className={styles.buttons}>
          {basketItems && basketItems?.some((item) => item.id === product.id) && (
            <>
              <button data-testid="not-add-product" className={styles.passiveButton}>
                Bu ürünü sepete ekleyemezsiniz.
              </button>
            </>
          )}

          {!basketItems?.some((item) => item.id === product.id) && (
            <>
              <button data-testid="add-product" className={styles.addButton} onClick={handleClick}>
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
