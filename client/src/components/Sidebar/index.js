import React from "react";
import styles from "./index.module.css";
import { filterSelectedKeyProducts } from "utils";
import { useDispatch, useSelector } from "react-redux";
import {
  updateProducts,
  updateFilter,
  updateSelectedFilterKey,
} from "redux/slices/ProductSlice";
import { updateSort } from "redux/slices/ProductSlice";

const Sidebar = ({ title, selectedFilter, propertyName, filterValues }) => {
  const { items } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  var filteredItems = {};
  const handleClick = (key) => {
    // gelen key selected itema ekle
    var keys = [...selectedFilter, [propertyName, key]];

    if (Object.keys(filterValues).length === 1) {
      //filterValues eğer 1 e eşit ise keys arrayinden bulunan key'i kaldır
      keys = keys.filter((item) => item[1] !== key);
      // console.log("remove key after", keys);
      //eğer keys length sıfır ise filtereditems=items olucak
      if (keys.length === 0) {
        filteredItems = items;
      } else {
        filteredItems = filterSelectedKeyProducts(items, keys);
      }
    } else {
      filteredItems = filterSelectedKeyProducts(items, keys); //filterProducts(items, propertyName, key);
    }
    dispatch(updateFilter({ filteredItems }));
    dispatch(updateProducts(filteredItems));
    dispatch(updateSelectedFilterKey(keys));
  };
  const handleSortClick = (key) => {
    // console.log(key);
    dispatch(updateSort(key));
  };
  return (
    <div className={styles.sidebar}>
      <p className={styles.title}>{title}</p>
      {propertyName !== "sort" &&
        Object.entries(filterValues).map(([key, value]) => (
          <p key={key} className={styles.text} onClick={() => handleClick(key)}>
            {key} ({value})
          </p>
        ))}
      {propertyName === "sort" &&
        Object.entries(filterValues).map(([key, value]) => (
          <p
            key={key}
            className={styles.text}
            onClick={() => handleSortClick(key)}
          >
            {value}
          </p>
        ))}
    </div>
  );
};

export default Sidebar;
