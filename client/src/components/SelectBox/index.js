import React from "react";
import styles from "./index.module.css";
import { updateSort } from "redux/slices/ProductSlice";
import { useDispatch } from "react-redux";
import { sortValues } from "constants/constants";
import { useSelector } from "react-redux";
const SelectBox = () => {
  const { sort } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    // console.log("e.target.value", e.target.value);
    dispatch(updateSort(e.target.value));
  };
  return (
    <div className={styles.selectbox}>
      <select onClick={handleClick}>
        <option className={styles.none} value="">
          Sıralama
        </option>

        {Object.entries(sortValues).map(([key, value]) => (
          <option key={key} value={key} selected={sort === key ? true : false}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
