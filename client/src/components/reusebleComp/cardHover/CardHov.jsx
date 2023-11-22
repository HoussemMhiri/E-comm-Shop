import React from "react";
import FleshBtn from "../fleshBtn/FleshBtn";
import styles from "./cardStyle.module.css";
const CardHov = ({ imge, p, pStyle }) => {
  return (
    <div className={styles.cardCont}>
      <img className={styles.img} src={imge} alt="" />

      <FleshBtn pStyle={pStyle} p={p} />
    </div>
  );
};

export default CardHov;
