import React from "react";
import styles from "./shopProd.module.css";
import TheProd from "./theProd/TheProd";
import QuantityComp from "./quantity/QuantityComp";
const ShopProd = ({ el }) => {
  return (
    <div className={`container-fluid my-4 ${styles.allProd}`}>
      <div className="row justify-content-between">
        <div className={`row justify-content-between   ${styles.secRow}`}>
          <div className="col-md-7 p-0">
            <TheProd el={el} />
          </div>
          <div className="col-md-4 p-0">
            <QuantityComp />
          </div>
        </div>
        <div className="col-md-1 col-2 text-end px-0">
          <p>$211</p>
        </div>
      </div>
    </div>
  );
};

export default ShopProd;
