import React from "react";
import styles from "./wwa.module.css";
const WWA = ({ h2, p1, p2 }) => {
  return (
    <div className={styles.allWWACont}>
      <h2 className={styles.h2}>{h2}</h2>

      <p className={styles.p}>{p1}</p>
      <p className={styles.p}>{p2}</p>
    </div>
  );
};

export default WWA;
