import React from "react";
import styles from "./SectTh.module.css";
import Slider from "../../../../reusebleComp/slider/Slider";
import BtnShop from "../../../../reusebleComp/shopBtn/BtnShop";

const SectThree = () => {
  return (
    <div className={styles.sectThCont}>
      <div className={styles.sectThDesc}>
        <h3 className={styles.h3}>Get Them Before They're Gone!</h3>
        <p className={styles.p}>
          We're not restocking our Weekend Boots or Terrus Clogs until Spring
          2024. Sizes are running out.
        </p>
      </div>

      <Slider />
      <BtnShop pBtn={"View all"} styleBtn={styles.styleBtn} />
    </div>
  );
};

export default SectThree;
