import React from "react";
import FleshBtn from "../fleshBtn/FleshBtn";
import styles from "./cardFstyle.module.css";
const CardFive = ({ imgs, p, cardImg }) => {
  return (
    <div className={styles.cardCont}>
      <img src={imgs} alt="" className={cardImg} />
      <div className={styles.cardDesc}>
        <FleshBtn p={p} />
      </div>
    </div>
  );
};

export default CardFive;
