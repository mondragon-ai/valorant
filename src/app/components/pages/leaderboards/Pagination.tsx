"use client";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from "../Pages.module.css";
import {faAnglesLeft, faAnglesRight} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

export const Pagination = ({
  next,
  prev,
}: {
  prev: () => void;
  next: () => void;
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className={styles.paginationWrapper}>
      <div>
        <div style={{marginRight: "10px"}} onClick={prev}>
          <FontAwesomeIcon icon={faAnglesLeft} />
        </div>
        <div style={{marginLeft: "10px"}} onClick={next}>
          <FontAwesomeIcon icon={faAnglesRight} />
        </div>
      </div>
    </div>
  );
};
