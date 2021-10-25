import React from "react";
import styles from "layouts/layouts.module.css";
import { ProductList, Sidebar, SubHeader } from "components";
const Content = () => {
  return (
    <div className={styles.content}>
      <SubHeader />
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <Sidebar />
          <Sidebar />
          <Sidebar />
        </div>
        <div className={styles.products}>
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Content;
