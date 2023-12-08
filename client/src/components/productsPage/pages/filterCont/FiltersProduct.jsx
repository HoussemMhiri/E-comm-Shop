import React, { useEffect, useState } from "react";

import styles from "./filterStyle.module.css";
import SideBtn from "../../../reusebleComp/sideBtn/SideBtn";
import Filter from "./Filter";
const FiltersProduct = ({
  filterCont,
  rowCont,
  divCont,
  sortP,
  select,
  productsCont,
}) => {
  const sizes = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46];
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  return (
    <div className={`container-fluid ${styles.filterCont}`}>
      <div className={`row ${styles.rowCont}`}>
        {screenWidth > 750 ? (
          <Filter
            divCont={styles.divCont}
            sortP={styles.sortP}
            select={styles.select}
          />
        ) : (
          <div className="col col-7">
            <SideBtn />
          </div>
        )}
        <div
          className={`col col-lg-1  ${styles.divCont} ${styles.productsCont}`}
        >
          <p>8 products</p>
        </div>
      </div>
    </div>
  );
};

export default FiltersProduct;
