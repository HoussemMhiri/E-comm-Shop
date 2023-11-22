import React, { useState } from "react";

import styles from "./cardImg.module.css";
const CardImgChange = ({ p, srcI, srcIe }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className={styles.AllCont}>
      <div
        className={styles.imgCont}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
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
        <p className={styles.p}>{p}</p>
        <p className={styles.price}>$236 USD</p>
      </div>
    </div>
  );
};

export default CardImgChange;
