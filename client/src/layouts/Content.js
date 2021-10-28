import React from "react";
import styles from "layouts/layouts.module.css";
import { ProductList, Sidebar, SubHeader } from "components";
// import { Footer } from "layouts";
import { useSelector } from "react-redux";
import { sortValues } from "constants/constants";
const Content = () => {
  const { colorFilters,brandFilters } = useSelector((state) => state.products);
  return (
    <div className={styles.content}>
      <SubHeader />
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <Sidebar title={"Renk"} propertyName={"color"} filterValues={colorFilters} />
          <Sidebar title={"Sıralama"} propertyName={"sort"} filterValues={sortValues} />
          <Sidebar title={"Marka"} propertyName={"brand"} filterValues={brandFilters} /> 
        </div>
        <div className={styles.products}>
          <ProductList />
          {/* <Footer /> */}
        </div>
        
      </div>
    </div>
  );
};

export default Content;
