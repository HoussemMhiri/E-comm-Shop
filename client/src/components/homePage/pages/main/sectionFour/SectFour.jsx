import React, { useEffect, useRef } from "react";
import styles from "./sectF.module.css";
import BtnShop from "../../../../reusebleComp/shopBtn/BtnShop";
import { motion, useInView, useAnimation } from "framer-motion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
      className={`container-fluid ${styles.AllCont}`}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="row">
        <Col md={6} className={`${styles.imgCont}`}>
          <img
            className={`${styles.imgSect} img-fluid`}
            src="https://thesusoutdoors.com/cdn/shop/files/SustainableMaterialsSectionHomepage.png?v=1699600794&width=750"
            alt=""
          />
        </Col>

        <Col md={6} className={`${styles.DescCont}`}>
          <div className={`text-md ${styles.DescContPlus}`}>
            <h3 className={`text-lg ${styles.DescContH3}`}>
              Thoughtfully Designed From Natural and Recycled Materials.
            </h3>
            <p className={`text-sm ${styles.DescContP}`}>
              Each pair diverts 1-2 kg of waste from our waterways and landfill,
              reduces 20kg of CO2 from the atmosphere, and conserves 10L of
              water when compared to your traditional leather boot.
            </p>
            <BtnShop
              pBtn={"Learn more"}
              styleBtn={`text-xs ${styles.styleBtn}`}
            />
          </div>
        </Col>
      </div>
    </motion.div>
  );
};

export default SectFour;
