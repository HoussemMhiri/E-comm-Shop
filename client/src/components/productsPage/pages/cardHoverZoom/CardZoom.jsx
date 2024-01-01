import React from "react";
import styles from "./cardStyle.module.css";

import SaveItem from "../../../reusebleComp/saveLike/SaveItem";
const CardZoom = ({ el, likeState }) => {
  return (
    <div className={` ${styles.AllCont}`}>
      <div className={styles.imgCont}>
        <img src={el.img} alt="" className={`img-fluid ${styles.imgStyle}`} />
      </div>
      {likeState ? (
        <div className={`${styles.Save}`}>
          <SaveItem />
        </div>
      ) : (
        ""
      )}

      <div className="mt-2">
        <p className={styles.pStyle}>{el.title}</p>
        <p className={styles.price}>{el.price}</p>
        <button className={styles.Btn}>Add to cart</button>
      </div>
    </div>
  );
};

export default CardZoom;
