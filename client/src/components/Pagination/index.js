import React, { useState } from "react";
import styles from "./index.module.css";
const Pagination = ({ productPerPage, totalCount, paginate }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCount / productPerPage); i++) {
    pageNumbers.push(i);
  }
  const handlePreviousClick = () => {
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
    <div data-testid="pagination" className={styles.pagination}>
      <ul>
        <button
          data-testid="back-button"
          className={styles.item}
          onClick={handlePreviousClick}
        >
          &lt;
        </button>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              href="!#"
              className={styles.item}
            >
              {number}
            </button>
          </li>
        ))}
        <button
          data-testid="next-button"
          className={styles.item}
          onClick={handleNextClick}
        >
          &gt;
        </button>
      </ul>
    </div>
  );
};

export default Pagination;
