import React from "react";
import styles from "./bannerStyle.module.css";
const Banner = ({ backgroundImageB, h3, p }) => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImageB})`,
  };
  return (
    <div style={backgroundStyle} className={styles.background}>
      <div className={styles.desc}>
        <h3 className={styles.h3}>{h3}</h3>
        <p className={styles.p}>{p}</p>
      </div>
    </div>
  );
};

export default Banner;
