import React from "react";
import styles from "./payStyle.module.css";
const PaymentInstr = () => {
  return (
    <div className={`container-fluid ${styles.AllCont}`}>
      <div className="row justify-content-between ">
        <div className={` p-0 col-md-8 `}>
          <label htmlFor="" className="text-secondary">
            Order special instructions
          </label>
          <textarea
            className={`form-control ${styles.textArea}`}
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className={`col-md-4 text-end px-0 `}>
          <div className={`py-3 ${styles.payCont}`}>
            <span className={`${styles.sub}`}>Subtotal</span>
            <span className={`text-secondary ${styles.money}`}>$363 USD</span>
            <p className={`text-secondary ${styles.parg}`}>
              Taxes and <u>shipping</u> calculated at checkout
            </p>
          </div>
          <button className={`${styles.btn}`}>Check out</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentInstr;
