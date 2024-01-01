import React from "react";
import styles from "./productStyle.module.css";
import CardImgsHover from "../cardHoverImgs/CardImgsHover";
import { productData, zoomImgs } from "./porductData";
import CardZoom from "../cardHoverZoom/CardZoom";
const ProductComp = () => {
  return (
    <div className={styles.AllCont}>
      {/*     {productData.map((el) => (
        <CardImgsHover key={el.id} el={el} likeState={true} />
      ))} */}
      {zoomImgs.map((el) => (
        <CardZoom key={el.id} el={el} likeState={true} />
      ))}
    </div>
  );
};

export default ProductComp;
