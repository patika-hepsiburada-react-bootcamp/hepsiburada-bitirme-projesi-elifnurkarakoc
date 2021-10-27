import { Product } from "components";
import styles from "./index.module.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getProductAsync, updateProducts } from "redux/slices/ProductSlice";
import { updateProductsSort } from "utils";
const ProductList = () => {
  const {
    visibleItems,
    indexOfFirstProducts,
    indexOfLastProducts,
    loading,
    error,
    sort,
  } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductAsync());
  }, [dispatch]);
  useEffect(() => {
    var sorted = updateProductsSort(visibleItems, sort);
    dispatch(updateProducts(sorted));
  }, [sort]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    <div>Error: {error}</div>;
  }

  return (
    <div className={styles.productlist}>
      {visibleItems
        .slice(indexOfFirstProducts, indexOfLastProducts)
        .map((product) => (
          <Product key={product.id} {...product} />
        ))}
    </div>
  );
};

export default ProductList;
