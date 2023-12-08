import React, { useEffect, useRef } from "react";
import styles from "./SectTwoStyle.module.css";
import { sectTData } from "./dummyData";
import CardHov from "../../../../reusebleComp/cardHover/CardHov";
import { motion, useInView, useAnimation } from "framer-motion";

const SectTwo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className={styles.sectCont}>
      <div className={styles.h3Cont}>
        <motion.h3
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          className={styles.h3}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Socially and environmentally progressive outdoor footwear that helps
          you #BeOutside
        </motion.h3>
      </div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 1 }}
        className={styles.flexCont}
      >
        {sectTData.map((el) => (
          <CardHov
            key={Math.random()}
            pStyle={styles.pStyle}
            p={el.name}
            imge={el.img}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default SectTwo;
