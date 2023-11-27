import React from "react";

import styles from "./filterStyle.module.css";
const FiltersProduct = () => {
  const sizes = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46];
  return (
    <div className={styles.filterCont}>
      <div>
        <p>Filter:</p>

        <select name="" id="">
          <option value="">Size</option>
          {sizes.map((el) => (
            <option value="">{el}</option>
          ))}
        </select>
      </div>
      <div>
        <p>Sort by:</p>

        <select name="" id="">
          <option value="">Featured</option>
          <option value="">Price: Low To High</option>
          <option value="">Price: High To Low</option>
        </select>
      </div>
      <div>
        <p>8</p> <p>products</p>
      </div>
    </div>
  );
};

export default FiltersProduct;
