import React, { useEffect, useRef } from "react";
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
import { motion, useInView, useAnimation } from "framer-motion";
const MainComp = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
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
      <motion.div
        ref={ref}
        className={styles.BckAllCont}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <BackgorundImg
          h3={"New In"}
          p={"The Anyday Rainboot in Sage"}
          pBtn={"Shop now"}
          styleCont={styles.backContT}
          styleH3={styles.styleH3}
          styleP={styles.styleP}
          styleBtn={styles.btnCont}
        />
      </motion.div>
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
