import React from "react";
import styles from "./sectF.module.css";
import BtnShop from "../../../../reusebleComp/shopBtn/BtnShop";
const SectFour = () => {
  return (
    <div className={styles.AllCont}>
      <img
        className={styles.imgSect}
        src="https://thesusoutdoors.com/cdn/shop/files/SustainableMaterialsSectionHomepage.png?v=1699600794&width=750"
        alt=""
      />
      <div className={styles.DescCont}>
        <h3 className={styles.DescContH3}>
          Thesus footwear is thoughtfully designed from natural and recycled
          materials
        </h3>
        <p className={styles.DescContP}>
          Each pair diverts 1-2 kg of waste from our waterways and landfill,
          reduces 20kg of CO2 from the atmosphere, and conserves 10L of water
          when compared to your traditional leather boot.
        </p>
        <BtnShop pBtn={"Learn more"} styleBtn={styles.styleBtn} />
      </div>
    </div>
  );
};

export default SectFour;
