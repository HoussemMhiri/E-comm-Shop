import React from "react";
import styles from "./sectEi.module.css";
import Col from "react-bootstrap/Col";
const SectEight = () => {
  const logos = [
    "https://thesusoutdoors.com/cdn/shop/files/oprah-magazine-logo_d31c7a35-3249-4ad4-88cd-ce2d91fb3365.png?v=1686325307&width=400",
    "https://thesusoutdoors.com/cdn/shop/files/NYTStyle-magazine-logo.png?v=1686325305&width=400",
    "https://thesusoutdoors.com/cdn/shop/files/gear-patrol-logo.png?v=1686325306&width=400",
    "https://thesusoutdoors.com/cdn/shop/files/outside-magazine-logo.png?v=1686325306&width=400",
  ];
  return (
    <div className={`container-fluid ${styles.AllCont}`}>
      <h3 className={styles.h3}>In the Press</h3>
      <div className={`row ${styles.logosCont}`}>
        {logos.map((el) => (
          <Col key={Math.random()} sm={6} lg={3}>
            <img src={el} alt="" className=" img-fluid" />
          </Col>
        ))}
      </div>
    </div>
  );
};

export default SectEight;
