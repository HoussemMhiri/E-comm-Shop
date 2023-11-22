import React from "react";
import styles from "./sectSev.module.css";
const SectSeven = () => {
  return (
    <div className={styles.AllCont}>
      <div className={styles.descCont}>
        <p className={styles.stars}>*****</p>
        <p className={styles.desc}>
          "The Weekend Boots have a very nice padding in the sole which makes it
          comfortable to wear for long periods of time and these shoes
          definitely fit very true to size."
        </p>
        <p className={styles.name}>CLAIRE</p>
      </div>
      <div className={styles.imgCont}>
        <img
          src="https://thesusoutdoors.com/cdn/shop/files/IMG_0116_Webcopy_fc954dc1-e884-4990-8074-610e2ce000fe.jpg?v=1686324989&width=900"
          alt=""
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default SectSeven;
