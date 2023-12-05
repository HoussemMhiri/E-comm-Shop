import React from "react";
import styles from "./sectSev.module.css";
import Col from "react-bootstrap/Col";
const SectSeven = () => {
  return (
    <div className={`container-fluid ${styles.AllCont}`}>
      <div className={`row `}>
        <Col md={6} className="d-flex align-items-center">
          <div className={styles.descCont}>
            <p className={styles.stars}>*****</p>
            <p className={styles.desc}>
              "The Weekend Boots have a very nice padding in the sole which
              makes it comfortable to wear for long periods of time and these
              shoes definitely fit very true to size."
            </p>
            <p className={styles.name}>CLAIRE</p>
          </div>
        </Col>
        <Col md={6}>
          <div className={styles.imgCont}>
            <img
              src="https://thesusoutdoors.com/cdn/shop/files/IMG_0116_Webcopy_fc954dc1-e884-4990-8074-610e2ce000fe.jpg?v=1686324989&width=900"
              alt=""
              className={`${styles.img} img-fluid`}
            />
          </div>
        </Col>
      </div>
    </div>
  );
};

export default SectSeven;
