import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import styles from "./btnStyle.module.css";
const FleshBtn = ({ pStyle, p }) => {
  return (
    <div className={styles.btnsCont}>
      <button className={styles.btns}>
        <span className={pStyle}>{p}</span>
      </button>
      <BsArrowRightShort
        style={{ fontSize: "23px" }}
        className={styles.arrow}
      />
    </div>
  );
};

export default FleshBtn;
