import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { useDispatch } from "react-redux";
import { searchProducts } from "redux/slices/ProductSlice";
const SearchInput = () => {
  const dispatch = useDispatch();
  
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (searchValue.trim().length >= 2) {
      // console.log(searchValue);
      dispatch(searchProducts(searchValue));
    } else {
      console.log("En az iki karakter giriniz.");
    }
  }, [searchValue]);

  return (
    <>
      <div className={styles.search}>
        <label>
          <input
            type="text"
            placeholder={"25 milyon’dan fazla ürün içerisinde ara"}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          ></input>
        </label>
        {/* {searchValue.trim().length === 1 && (
          <div className={styles.alert}>En az iki karakter giriniz</div>
        )} */}
      </div>
    </>
  );
};

export default SearchInput;
