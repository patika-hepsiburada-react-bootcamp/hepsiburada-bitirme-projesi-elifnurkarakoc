import React, { useEffect, useState } from "react";
import styles from "./layouts.module.css";
import { Pagination } from "components";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentProducts } from "redux/slices/ProductSlice";

const Footer = () => {
  const [productPerPage] = useState(12);

  const { visibleItems } = useSelector((state) => state.products);

  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  var indexOfLastProducts,indexOfFirstProducts;
  const dispatch = useDispatch();
  useEffect(() => {
    indexOfLastProducts = currentPage * productPerPage;
    indexOfFirstProducts = indexOfLastProducts - productPerPage;
    dispatch(getCurrentProducts({ indexOfFirstProducts, indexOfLastProducts }));
    setCurrentPage(1);
  }, [currentPage,indexOfLastProducts,indexOfFirstProducts]);
  return (
    <div className={styles.pagination}>
      <Pagination
        productPerPage={productPerPage}
        totalCount={visibleItems.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Footer;
