import React, { useState } from "react";

import styles from "./cardImg.module.css";
const CardImgChange = ({ p, srcI, srcIe, price, AllCont, pStyle, imgCont }) => {
  const [hovered, setHovered] = useState(false);

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
      <div className={styles.AllpCont}>
        <p className={pStyle}>{p}</p>
        <p className={styles.price}>{price}</p>
      </div>
    </div>
  );
};

export default CardImgChange;
