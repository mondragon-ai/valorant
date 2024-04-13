"use client";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from "../Pages.module.css";
import {faAnglesLeft, faAnglesRight} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

export const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  return (
    <div className={styles.paginationWrapper}>
      <div>
        <div style={{marginRight: "10px"}} onClick={handlePreviousPage}>
          <FontAwesomeIcon icon={faAnglesLeft} />
        </div>
        <div style={{marginLeft: "10px"}} onClick={handleNextPage}>
          <FontAwesomeIcon icon={faAnglesRight} />
        </div>
      </div>
    </div>
  );
};
