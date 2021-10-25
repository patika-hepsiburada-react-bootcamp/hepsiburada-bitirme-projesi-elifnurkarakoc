import React from "react";
import styles from "./index.module.css";
const PageTitle = () => {
  return (
    <div className={styles.page_title}>
      <div className={styles.text}>iPhone iOS cep telefonu</div>
      <div className={styles.search_text}>
        Aranan Kelime: <span> iphone 11</span>
      </div>
    </div>
  );
};

export default PageTitle;
