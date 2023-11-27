import React from "react";
import CardImgChange from "../../../reusebleComp/cardChangeImg/CardImgChange";
import imgI from "../productImgs/whiteBootImg.jpg";
import imgIe from "../productImgs/whiteBootImge.png";
import styles from "./CardHovImgStyle.module.css";
const CardImgsHover = ({ el }) => {
  return (
    <div className={styles.allCardCont}>
      <CardImgChange
        p={el.title}
        srcI={el.imgI}
        srcIe={el.imgIe}
        price={el.price}
        AllCont={styles.AllCont}
        pStyle={styles.pStyle}
        imgCont={styles.imgCont}
      />
      <button className={styles.Btn}>Add to cart</button>
    </div>
  );
};

export default CardImgsHover;
