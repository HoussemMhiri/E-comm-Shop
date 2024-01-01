import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import styles from "./cardImg.module.css";
import SaveItem from "../saveLike/SaveItem";
const CardImgChange = ({
  p,
  srcI,
  srcIe,
  price,
  AllCont,
  pStyle,
  imgCont,
  likeState,
}) => {
  const [hovered, setHovered] = useState(false);
  const likeChange = (e) => {
    e.target.style.color !== "red"
      ? (e.target.style.color = "red")
      : (e.target.style.color = "");
  };
  return (
    <div
      className={AllCont}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={imgCont}>
        <img
          className={styles.img}
          src={srcI}
          alt=""
          style={{ opacity: hovered ? 1 : 0 }}
        />
        <img
          className={styles.imge}
          src={srcIe}
          alt=""
          style={{ opacity: hovered ? 0 : 1 }}
        />
      </div>
      {likeState ? (
        <div className={`${styles.Save}`}>
          <SaveItem />
        </div>
      ) : (
        ""
      )}

      <div className={styles.AllpCont}>
        <p className={pStyle}>{p}</p>
        <p className={styles.price}>{price}</p>
      </div>
    </div>
  );
};

export default CardImgChange;
