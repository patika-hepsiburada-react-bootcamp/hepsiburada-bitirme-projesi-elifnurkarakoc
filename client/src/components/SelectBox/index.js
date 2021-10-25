import React from "react";
import styles from "./index.module.css";
const SelectBox = () => {
  return (
    <div className={styles.selectbox}>
      <select>
        <option className={styles.none} defaultValue>
          Sıralama
        </option>
        <option value="SORT_BY_PRICE_ASC">En Düşük Fiyat</option>
        <option value="SORT_BY_PRICE_DESC">En Yüksek Fiyat</option>
        <option value="SORT_BY_LATEST_ASC">En Yeniler (A&gt;Z)</option>
        <option value="SORT_BY_LATEST_DESC">En Yeniler (Z&gt;A)</option>
      </select>
    </div>
  );
};

export default SelectBox;
