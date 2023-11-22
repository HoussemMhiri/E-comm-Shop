import React from "react";
import BackgorundImg from "../../../reusebleComp/backgorundImg/BackgorundImg";
import styles from "./MainStyle.module.css";
import {
  SectTwo,
  SectThree,
  SectFour,
  SectFive,
  SectSix,
  SectSeven,
  SectEight,
  SectNine,
  NewsL,
} from "../main";
import Carousel from "../../../reusebleComp/carousel/Carousel";
import { carouselData } from "../../../reusebleComp/carousel/carouselData";
const MainComp = () => {
  return (
    <div className={styles.mainCont}>
      <BackgorundImg
        h3={"Our Winter Sale Has Arrived!"}
        p={"Take up to 40% off select styles."}
        pBtn={"Shop the sale"}
        styleCont={styles.backCont}
        styleH3={styles.styleH3}
        styleP={styles.styleP}
        styleBtn={styles.btnCont}
      />
      <SectTwo />
      <div className={styles.BckAllCont}>
        <BackgorundImg
          h3={"New In"}
          p={"The Anyday Rainboot in Sage"}
          pBtn={"Shop now"}
          styleCont={styles.backContT}
          styleH3={styles.styleH3}
          styleP={styles.styleP}
          styleBtn={styles.btnCont}
        />
      </div>
      <div className={styles.carouselAllCont}>
        <Carousel data={carouselData} />
      </div>
      <SectThree />
      <SectFour />
      <SectFive />
      <SectSix />
      <SectSeven />
      <SectEight />
      <SectNine />
      <NewsL />
    </div>
  );
};

export default MainComp;
