import React from "react";
import styles from "./sectN.module.css";
const SectNine = () => {
  const imgs = [
    "https://thesusoutdoors.com/cdn/shop/files/vegan-green-hiking-boots.png?v=1699600962&width=400",
    "https://thesusoutdoors.com/cdn/shop/files/allweather-sustainable-hikingboots.png?v=1687782839&width=400",
    "https://thesusoutdoors.com/cdn/shop/files/vegan-outdoor-clogs.png?v=1699600989&width=400",
    "https://thesusoutdoors.com/cdn/shop/files/urban-style-comfortable-boots.png?v=1699601016&width=400",
  ];
  return (
    <div className={styles.allCont}>
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
      <div className={styles.imgsCont}>
        {imgs.map((el) => (
          <img className={styles.imgs} src={el} alt="" />
        ))}
      </div>
    </div>
  );
};

export default SectNine;
