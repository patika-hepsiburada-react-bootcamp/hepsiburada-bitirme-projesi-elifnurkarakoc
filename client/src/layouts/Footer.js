import React, { useEffect, useState } from "react";
import styles from "./layouts.module.css";
import { Pagination } from "components";
import { useSelector, useDispatch } from "react-redux";
import { updateIndexs } from "redux/slices/ProductSlice";

const Footer = () => {
  var indexOfLastProducts,indexOfFirstProducts;
  const [productPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const { visibleItems } = useSelector((state) => state.products);

  

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  const dispatch = useDispatch();
  useEffect(() => {
    indexOfLastProducts = currentPage * productPerPage;
    indexOfFirstProducts = indexOfLastProducts - productPerPage;
    dispatch(updateIndexs({ indexOfFirstProducts, indexOfLastProducts }));
    //console.log(currentPage);
  }, [currentPage]);
  useEffect(()=>{
    setCurrentPage(1);
    //console.log("page 1");
  },[visibleItems]);

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
