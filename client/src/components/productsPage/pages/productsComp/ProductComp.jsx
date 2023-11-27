import React from "react";
import styles from "./productStyle.module.css";
import CardImgsHover from "../cardHoverImgs/CardImgsHover";
import { productData } from "./porductData";
const ProductComp = () => {
  return (
    <div className={styles.AllCont}>
      {productData.map((el) => (
        <CardImgsHover key={el.id} el={el} />
      ))}
    </div>
  );
};

export default ProductComp;
