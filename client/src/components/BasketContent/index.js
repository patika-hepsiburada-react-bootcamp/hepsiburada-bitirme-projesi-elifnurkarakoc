import React from "react";
import styles from "./index.module.css";
import {  useSelector,useDispatch } from "react-redux";
import { showModal } from "redux/slices/CartSlice";
const BasketContent = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleClick = (item) => {
    dispatch(showModal(item));
    console.log(item);
    //dispatch(deleteProductToCart(item));
  };
  return items.map((item, index) => (
    <div key={index} className={styles.item}>
      <div className={styles.image}>
        <img src={item.image} alt="" />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{item.name}</div>
        <div className={styles.delete_wrapper}>
          <button className={styles.delete} onClick={() => handleClick(item)}>
            <span>Kaldır</span>
          </button>
        </div>
      </div>
    </div>
  ));
};

export default BasketContent;
