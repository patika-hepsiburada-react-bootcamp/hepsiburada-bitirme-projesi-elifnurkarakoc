import React from "react";
import styles from "./index.module.css";
import { updateSort } from "redux/slices/ProductSlice";
import { useDispatch } from "react-redux";

const SelectBox = () => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    console.log("e.target.value", e.target.value);
    dispatch(updateSort(e.target.value));
  };
  return (
    <div className={styles.selectbox}>
      <select onClick={handleClick}>
        <option className={styles.none} value="">
          Sıralama
        </option>
        {/* 
        {Object.entries(sortValues).map(([key, value]) => {
          console.log({ key });
          console.log({ value });
        })} */}
        <option value="price_asc">En Düşük Fiyat</option>
        <option value="price_desc">En Yüksek Fiyat</option>
        <option value="latest_asc">En Yeniler (A&gt;Z)</option>
        <option value="latest_desc">En Yeniler (Z&gt;A)</option>
      </select>
    </div>
  );
};

export default SelectBox;
