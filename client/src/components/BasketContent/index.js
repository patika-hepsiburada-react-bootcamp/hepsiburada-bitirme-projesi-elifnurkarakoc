import React from "react";
import styles from "./index.module.css";
import { useSelector, useDispatch } from "react-redux";
import { showModal } from "redux/slices/BasketSlice";
const BasketContent = () => {
  const { basketItems } = useSelector((state) => state.basket);
  const dispatch = useDispatch();
  const handleClick = (item) => {
    dispatch(showModal(item));
  };
  return basketItems.map((item, index) => (
    <div  key={index} className={styles.item}>
      <div data-testid="basket-item" className={styles.image}>
        <img src={item.image} alt="" />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{item.title}</div>
        <div className={styles.title}>{item.category}</div>
        <div className={styles.deleteWrapper}>
          <button data-testid="basket-delete-button" className={styles.delete} onClick={() => handleClick(item)}>
            <span>Kaldır</span>
          </button>
        </div>
      </div>
    </div>
  ));
};

export default BasketContent;
