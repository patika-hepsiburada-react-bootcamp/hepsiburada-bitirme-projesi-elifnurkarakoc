import { Product } from "components";
import styles from "./index.module.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Pagination } from "components";
import { getProductAsync, updateProducts } from "redux/slices/ProductSlice";
import { updateProductsSort } from "utils";
const ProductList = () => {
  const [productPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const { visibleItems, loading, error, sort } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
  // Get current products
  const indexOfLastProducts = currentPage * productPerPage;
  const indexOfFirstProducts = indexOfLastProducts - productPerPage;

  return (
    <div className={styles.productlist}>
      {visibleItems
        .slice(indexOfFirstProducts, indexOfLastProducts)
        .map((product) => (
          <Product key={product.id} {...product} />
        ))}
      <div className={styles.pagination}>
        <Pagination
          productPerPage={productPerPage}
          totalCount={visibleItems.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default ProductList;
