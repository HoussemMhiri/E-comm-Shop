import React, { useEffect, useRef } from "react";
import styles from "./sectN.module.css";
import { motion, useInView, useAnimation } from "framer-motion";
import Col from "react-bootstrap/Col";
const SectNine = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  const imgs = [
    "https://thesusoutdoors.com/cdn/shop/files/vegan-green-hiking-boots.png?v=1699600962&width=400",
    "https://thesusoutdoors.com/cdn/shop/files/allweather-sustainable-hikingboots.png?v=1687782839&width=400",
    "https://thesusoutdoors.com/cdn/shop/files/vegan-outdoor-clogs.png?v=1699600989&width=400",
    "https://thesusoutdoors.com/cdn/shop/files/urban-style-comfortable-boots.png?v=1699601016&width=400",
  ];
  return (
    <motion.div
      className={`container-fluid ${styles.allCont}`}
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <h3 className={styles.h3}>
        Join Us on Instagram{" "}
        <a
          className={styles.a}
          href="https://www.instagram.com/thesus_outdoors/"
          target="_blank"
          rel="noreferrer"
        >
          @Thesus_Outdoors
        </a>
      </h3>
      <div className={`row ${styles.imgsCont}`}>
        {imgs.map((el, index) => (
          <Col key={index} xs={12} sm={6} lg={3} className={styles.imgCol}>
            <img
              className={`img-fluid ${styles.imgs} ${
                index === 1 ? styles.secondImage : ""
              }`}
              src={el}
              alt=""
            />
          </Col>
        ))}
      </div>
    </motion.div>
  );
};

export default SectNine;
