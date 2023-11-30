import React from "react";
import styles from "./cardStyle.module.css";

const CardZoom = ({ el, price, AllCont, pStyle, imgCont }) => {
  return (
    <div className={`${AllCont} ${styles.cardCont}`}>
      <div className={imgCont}>
        <img src={el.img} alt="" className={`${imgCont} ${styles.imgStyle}`} />
      </div>
      <div>
        <p className={pStyle}>{el.title}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default CardZoom;
