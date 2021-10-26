import { Product } from "components";
import styles from "./index.module.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Pagination } from "components";
import { getProductAsync } from "redux/slices/ProductSlice";

const ProductList = () => {
  const [productPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const { visibleItems, loading, error } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  useEffect(() => {
    dispatch(getProductAsync());
  }, [dispatch]);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    <div>Error: {error}</div>;
  }
  // Get current products
  const indexOfLastProducts = currentPage * productPerPage;
  const indexOfFirstProducts = indexOfLastProducts - productPerPage;
  const currentProducts = visibleItems.slice(
    indexOfFirstProducts,
    indexOfLastProducts
  );
  return (
    <div className={styles.productlist}>
      {currentProducts.map((product) => (
        <Product key={product.id} {...product} />
      ))}
      <Pagination
        productPerPage={productPerPage}
        totalCount={visibleItems.length}
        paginate={paginate}
      />
    </div>
  );
};

export default ProductList;
