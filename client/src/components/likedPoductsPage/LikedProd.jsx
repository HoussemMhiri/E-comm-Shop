import React from "react";
import styles from "./likedStyle.module.css";
import { productData } from "../productsPage/pages/productsComp/porductData";
import CardImgsHover from "../productsPage/pages/cardHoverImgs/CardImgsHover";
const LikedProd = () => {
  return (
    <div className={`container-fluid  ${styles.ShopCont}`}>
      <div className={`container-fluid   ${styles.fstCont}`}>
        <div className="row justify-content-between  d-flex align-items-center">
          <h1 className="col-6 p-0">Your Saved Items</h1>
          <button className="col-6">Continue shopping</button>
        </div>
      </div>
      <div className={styles.AllCont}>
        {productData.map((el) => (
          <CardImgsHover key={el.id} el={el} likeState={false} />
        ))}
      </div>
    </div>
  );
};

export default LikedProd;
