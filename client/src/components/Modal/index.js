import React from "react";
import styles from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductToCart, closeModal } from "redux/slices/CartSlice";
const Modal = () => {
  const { deleteItem } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleConfirmClick = () => {
    dispatch(deleteProductToCart(deleteItem));
  };
  const handleCloseClick = () => {
    dispatch(closeModal(deleteItem));
  };

  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <div className={styles.title}>
          Ürünü silmek istediğinize emin misiniz?
        </div>
        <div className={styles.divider}></div>
        <div className={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentiall....
        </div>
        <div className={styles.buttons}>
          <div className={styles.confirm}>
            <div className={styles.text} onClick={handleConfirmClick}>
              Evet
            </div>
          </div>
          <div className={styles.close}>
            <div className={styles.text} onClick={handleCloseClick}>
              Hayır
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
