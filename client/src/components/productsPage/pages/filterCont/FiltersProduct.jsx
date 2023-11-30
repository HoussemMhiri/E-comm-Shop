import React from "react";

import styles from "./filterStyle.module.css";
const FiltersProduct = () => {
  const sizes = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46];
  return (
    <div className={styles.filterCont}>
      <div className={styles.divCont}>
        <p className={styles.sortP}>Filter:</p>

        <select name="" id="" className={styles.select}>
          <option value="">Size</option>
          {sizes.map((el) => (
            <option value="">{el}</option>
          ))}
        </select>
      </div>
      <div className={`${styles.divCont} ${styles.sortByCont}`}>
        <div className={styles.sort}>
          <p className={styles.sortP}>Sort by:</p>

          <select name="" id="" className={styles.select}>
            <option value="">Featured</option>
            <option value="">Price: Low To High</option>
            <option value="">Price: High To Low</option>
          </select>
        </div>
        <div className={`${styles.divCont} ${styles.productsCont}`}>
          <p className={styles.num}>8</p> <p>products</p>
        </div>
      </div>
    </div>
  );
};

export default FiltersProduct;
