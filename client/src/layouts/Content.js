import React from "react";
import styles from "layouts/layouts.module.css";
import { ProductList, Sidebar, SubHeader } from "components";
import { useSelector } from "react-redux";
import { sortValues } from "constants/constants";
const Content = () => {
  const { colorFilters,brandFilters,selectedFilter } = useSelector((state) => state.products);
  console.log({colorFilters});
  console.log({sortValues});
  return (
    <div className={styles.content}>
      <SubHeader />
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <Sidebar title={"Renk"} selectedFilter={selectedFilter} propertyName={"color"} filterValues={colorFilters} />
          <Sidebar title={"Sıralama"} selectedFilter={selectedFilter} propertyName={"sort"} filterValues={sortValues} />
          <Sidebar title={"Marka"} selectedFilter={selectedFilter} propertyName={"brand"} filterValues={brandFilters} /> 
        </div>
        <div className={styles.products}>
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Content;
