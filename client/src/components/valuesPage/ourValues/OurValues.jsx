import React from "react";
import styles from "./ourV.module.css";
import { ourValuesData } from "./ourVData";
const OurValues = () => {
  return (
    <div className={styles.AllinfoCont}>
      <h2>Our Values</h2>
      <div className={styles.infoCont}>
        {ourValuesData.map((el) => (
          <div className={styles.colCont}>
            <h4 className={styles.h4Cont}>{el.title}</h4>
            <p className={styles.pCont}>{el.p}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurValues;
