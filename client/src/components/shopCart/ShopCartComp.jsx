import React from "react";
import styles from "./shopStyle.module.css";
import ShopProd from "./shopProd/ShopProd";
import PaymentInstr from "./paymentPlusInstr/PaymentInstr";
import EmptyShop from "./emptyShop/EmptyShop";
const ShopCartComp = () => {
  const imageContext = require.context(
    "./shopProd/theProd/img",
    false,
    /\.(png|jpe?g|svg)$/
  );
  const images = imageContext.keys().map(imageContext);
  return (
    <div className={`container-fluid  ${styles.ShopCont}`}>
      <div className={`container-fluid   ${styles.fstCont}`}>
        <div className="row justify-content-between  d-flex align-items-center">
          <h1 className="col-6 p-0">Your cart</h1>
          <button className="col-6">Continue shopping</button>
        </div>
        <div
          className={`row justify-content-between mt-4  d-flex align-items-center ${styles.secCont}`}
        >
          <p className={`col-8 text-secondary ${styles.ps}`}>PRODUCT</p>
          <p className={`col-3  text-secondary ${styles.qtity} ${styles.ps}`}>
            QUANTITY
          </p>
          <p className={`col-md-1 col-3  text-secondary ${styles.ps}`}>TOTAL</p>
        </div>
      </div>
      <div className="my-5">
        {images.map((el, i) => (
          <ShopProd key={i} el={el} />
        ))}
      </div>
      <div>
        <PaymentInstr />
      </div>

      {/*    <EmptyShop /> */}
    </div>
  );
};

export default ShopCartComp;
