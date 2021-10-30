import React from "react";
import styles from "./index.module.css";
import { filterSelectedKeyProducts } from "utils";
import { useDispatch, useSelector } from "react-redux";
import {
  updateProducts,
  updateFilter,
  updateSelectedFilterKey,
  updateSort
} from "redux/slices/ProductSlice";


const Sidebar = ({ title, propertyName, filterValues }) => {
  const { items,selectedFilter } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  var filteredItems = {};
  const handleClick = (key) => {
    // add incoming key to selected item
    var keys = [...selectedFilter, [propertyName, key]];

    if (Object.keys(filterValues).length === 1) {
      //filterValues if equal to 1 remove key from keys array
      keys = keys.filter((item) => item[1] !== key);
      //if keys length is zero then filteredItems will be items
      if (keys.length === 0) {
        filteredItems = items;
      } else {
        filteredItems = filterSelectedKeyProducts(items, keys);
      }
    } else {
      filteredItems = filterSelectedKeyProducts(items, keys);
    }
    dispatch(updateFilter({ filteredItems }));
    dispatch(updateProducts(filteredItems));
    dispatch(updateSelectedFilterKey(keys));
  };
  const handleSortClick = (key) => {
    dispatch(updateSort(key));
  };
  return (
    <div className={styles.sidebar}>
      <p data-testid="sidebar" className={styles.title}>{title}</p>
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
