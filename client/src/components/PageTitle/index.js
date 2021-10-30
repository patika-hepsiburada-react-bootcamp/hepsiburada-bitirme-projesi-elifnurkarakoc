import React from "react";
import { useSelector } from "react-redux";
import styles from "./index.module.css";
const PageTitle = () => {
  const { searchValue } = useSelector((state) => state.products);
  return (
    <div className={styles.page_title}>
      <div data-testid="page-title" className={styles.text}>
        iPhone iOS cep telefonu
      </div>
      <div className={styles.search_text}>
        Aranan Kelime: <span> {searchValue} </span>
      </div>
    </div>
  );
};

export default PageTitle;
