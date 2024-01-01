import React from "react";
import { IoTrashOutline } from "react-icons/io5";
import styles from "./qtity.module.css";
const QuantityComp = () => {
  return (
    <div className={`  ${styles.allQtityCont}`}>
      <div className={`  ${styles.calc}`}>
        <p className="btn cursor-pointer">-</p>
        <p>1</p>
        <p className="btn cursor-pointer">+</p>
      </div>
      <div className="btn cursor-pointer">
        <IoTrashOutline />
      </div>
    </div>
  );
};

export default QuantityComp;
