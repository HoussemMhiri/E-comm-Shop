import React from "react";
import styles from "./botCaro.module.css";
import Carousel from "react-bootstrap/Carousel";
import { carouselData } from "../carousel/carouselData";
import BtnShop from "../shopBtn/BtnShop";

const BotCarros = () => {
  return (
    <Carousel data-bs-theme="dark">
      {carouselData.map((el) => (
        <Carousel.Item key={Math.random()}>
          <img className="d-block w-100" src={el.img} alt="First slide" />
          <Carousel.Caption className={styles.Info}>
            <h5 className={styles.card_title}>{el.h3}</h5>
            <p className={styles.card_p}>{el.p}</p>
            <BtnShop pBtn={"Shop now"} styleBtn={styles.styleBtn} />
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default BotCarros;
