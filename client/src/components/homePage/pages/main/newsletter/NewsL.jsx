import React from "react";
import BtnShop from "../../../../reusebleComp/shopBtn/BtnShop";
import styles from "./news.module.css";
const NewsL = () => {
  return (
    <div className={styles.allCont}>
      <div className={styles.desc}>
        <h3 className={styles.h3}>Let's stay in touch!</h3>
        <p className={styles.p}>
          Subscribe to our newsletter. Get $10 off your first purchase,
          exclusive offers and outdoor tips, trips and education.
        </p>
      </div>
      <div>
        <input
          className={styles.inp}
          type="text"
          name=""
          id=""
          placeholder="Your e-mail"
        />
        <BtnShop pBtn={"Get $10 savings"} styleBtn={styles.styleBtn} />
      </div>
    </div>
  );
};

export default NewsL;
