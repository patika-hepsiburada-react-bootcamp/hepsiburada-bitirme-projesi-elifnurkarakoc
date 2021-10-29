import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { useDispatch } from "react-redux";
import { searchProducts } from "redux/slices/ProductSlice";
const SearchInput = () => {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (searchValue.trim().length >= 2) {
      dispatch(searchProducts(searchValue));
    } else {
      console.log("En az iki karakter giriniz.");
    }
    if (searchValue.length === 0) {
      //console.log("searchvalue length 0");
      dispatch(searchProducts(searchValue));
    }
  }, [searchValue]);

  return (
    <>
      <div className={styles.search}>
        <label>
          <input
            data-testid="search-input"
            type="text"
            placeholder="25 milyon’dan fazla ürün içerisinde ara"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          ></input>
        </label>
        {searchValue.trim().length === 1 && (
          <div data-testid="alert" className={styles.alert}>
            En az iki karakter giriniz
          </div>
        )}
      </div>
    </>
  );
};

export default SearchInput;
