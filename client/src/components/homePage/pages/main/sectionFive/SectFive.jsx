import React from "react";
import styles from "./sectStyle.module.css";
import CardFive from "../../../../reusebleComp/cardSectFive/CardFive";
import { cardData } from "./cardData";
import BtnShop from "../../../../reusebleComp/shopBtn/BtnShop";
const SectFive = () => {
  return (
    <div className={styles.AllCont}>
      <h3 className={styles.h3}>Thesus Bestsellers</h3>
      <div className={styles.cardsCont}>
        {cardData.map((el, index) => (
          <CardFive
            key={index}
            p={el.btnP}
            imgs={el.img}
            cardImg={styles[`cardImg${index + 1}`]}
          />
        ))}
      </div>
      <BtnShop styleBtn={styles.styleBtn} pBtn={"Shop Bestsellers"} />
    </div>
  );
};

export default SectFive;
