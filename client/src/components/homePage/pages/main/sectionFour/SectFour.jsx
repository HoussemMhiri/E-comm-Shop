import React, { useEffect, useRef } from "react";
import styles from "./sectF.module.css";
import BtnShop from "../../../../reusebleComp/shopBtn/BtnShop";
import { motion, useInView, useAnimation } from "framer-motion";
const SectFour = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <motion.div
      ref={ref}
      className={styles.AllCont}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
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
    </motion.div>
  );
};

export default SectFour;
