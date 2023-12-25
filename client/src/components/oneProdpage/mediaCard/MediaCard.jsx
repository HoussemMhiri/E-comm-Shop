import React from "react";
import styles from "./mediaCard.module.css";
import { mediaInfo } from "./mediaData";
import Banners from "../../valuesPage/banners/Banners";
const MediaCard = () => {
  return (
    <div className={styles.mediaCont}>
      {mediaInfo.map((el) => (
        <Banners
          key={el.id}
          el={el}
          AllCont={styles.AllCont}
          thirdCont={styles.thirdCont}
          lastOne={styles.lastOne}
          Row={styles.Row}
          imgs={styles.imgs}
          desc={styles.desc}
          h3={styles.h3}
          p={styles.p}
        />
      ))}
    </div>
  );
};

export default MediaCard;
