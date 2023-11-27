import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import styles from "./sliderStyle.module.css";
import CardImgChange from "../cardChangeImg/CardImgChange";
import { cardData } from "../../homePage/pages/main/sectionThree/cardImgData";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Carousel from "react-multi-carousel";

const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={styles.AllCardsCont}>
      <Carousel responsive={responsive}>
        {cardData.map((el) => (
          <CardImgChange
            key={Math.random()}
            p={el.title}
            srcI={el.img}
            srcIe={el.imge}
            width={"100%"}
            price={"$236 USD"}
            AllCont={styles.AllCont}
            pStyle={styles.pStyle}
            imgCont={styles.imgCont}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
