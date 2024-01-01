import React from "react";
import styles from "./emptyStyle.module.css";
const EmptyShop = () => {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center">
      <div className="row align-items-center justify-content-center">
        <h1 className={`text-center ${styles.h1}`}>Your cart is empty</h1>
        <button className={`${styles.btn}`}>Continue shopping</button>
      </div>
    </div>
  );
};

export default EmptyShop;
