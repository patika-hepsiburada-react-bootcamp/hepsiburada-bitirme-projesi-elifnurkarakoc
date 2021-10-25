import React, { useState } from "react";
import styles from "./index.module.css";
const Pagination = ({ productPerPage, totalCount, paginate }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCount / productPerPage); i++) {
    pageNumbers.push(i);
  }
  const handleBackClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      paginate(currentPage - 1);
    } else {
      return;
    }
  };
  const handleNextClick = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
      paginate(currentPage + 1);
    } else {
      return;
    }
  };
  return (
    <div className={styles.pagination}>
      <ul>
        <button className={styles.item} onClick={handleBackClick}>&lt;</button>
        {pageNumbers.map((number) => (
          <li key={number} className={styles.item}>
            <button onClick={() => paginate(number)} href="!#">
              {number}
            </button>
          </li>
        ))}
        <button className={styles.item} onClick={handleNextClick}>&gt;</button>
      </ul>
    </div>
  );
};

export default Pagination;
