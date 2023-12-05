import React, { useEffect, useRef } from "react";
import styles from "./sectStyle.module.css";
import CardFive from "../../../../reusebleComp/cardSectFive/CardFive";
import { cardData } from "./cardData";
import BtnShop from "../../../../reusebleComp/shopBtn/BtnShop";
import { motion, useInView, useAnimation } from "framer-motion";
import Col from "react-bootstrap/Col";
const SectFive = () => {
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
      className={`container-fluid ${styles.AllCont}`}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <h3 className={styles.h3}>Thesus Bestsellers</h3>
      <div className={`row ${styles.cardsCont}`}>
        {cardData.map((el, index) => (
          <Col sm={6} lg={3}>
            <CardFive
              key={index}
              p={el.btnP}
              imgs={el.img}
              cardImg={styles[`cardImg${index + 1}`]}
            />
          </Col>
        ))}
      </div>
      <BtnShop styleBtn={styles.styleBtn} pBtn={"Shop Bestsellers"} />
    </motion.div>
  );
};

export default SectFive;
