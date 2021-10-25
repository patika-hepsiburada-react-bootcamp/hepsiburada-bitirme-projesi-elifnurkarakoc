import React from "react";
import styles from "./index.module.css";
const SearchInput = () => {
  return (
    <div className={styles.search}>
      <label>
        <input
          type="text"
          placeholder={"25 milyon’dan fazla ürün içerisinde ara"}
        ></input>
      </label>
    </div>
  );
};

export default SearchInput;
