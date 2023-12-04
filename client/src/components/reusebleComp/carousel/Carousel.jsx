import React, { useEffect, useState } from "react";
import styles from "./carousel.module.css";
import BtnShop from "../shopBtn/BtnShop";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { BsPause } from "react-icons/bs";
import { MdPlayArrow } from "react-icons/md";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Carousel = ({ data }) => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const slideRight = () => {
    setCurrent(current === data.length - 1 ? 0 : current + 1);
  };
  const slideLeft = () => {
    setCurrent(current === 0 ? data.length - 1 : current - 1);
  };
  const slideDots = (i) => {
    setCurrent(i);
  };

  const handlePuse = () => {
    setAutoPlay(!autoPlay);
  };
  useEffect(() => {
    const timeoutId =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  });

  return (
    <div className={styles.carousel}>
      <div className={styles.carousel_wrapper}>
        {data.map((el, i) => {
          return (
            <div
              key={i}
              className={`${styles.carousel_card} ${
                i === current
                  ? styles.carousel_card_active
                  : styles.carousel_card
              }`}
            >
              <img
                className={`${styles[`carousel_img${i + 1}`]} ${
                  styles.carousel_img
                }`}
                src={el.img}
                alt=""
              />
              <div className={styles.card_overlay}>
                <h3 className={styles.card_title}>{el.h3}</h3>
                <p className={styles.card_p}>{el.p}</p>
                <BtnShop pBtn={"Shop now"} styleBtn={styles.styleBtn} />
              </div>
            </div>
          );
        })}
        <div className={styles.allCarouselControlContainer}>
          <div className={styles.carousel_arrowsCont}>
            <div className={styles.carousel_arrowLeft} onClick={slideLeft}>
              <MdKeyboardArrowLeft className={styles.arrowLeft} />
            </div>
            <div className={styles.carousel_arrowRight} onClick={slideRight}>
              <MdKeyboardArrowRight className={styles.arrowRight} />
            </div>
          </div>
          <div className={styles.carousel_pagination}>
            {data.map((el, i) => {
              return (
                <div
                  key={i}
                  className={`${styles.pagination_dot} ${
                    i === current
                      ? styles.pagination_dot_active
                      : styles.pagination_dot
                  }`}
                  onClick={() => slideDots(i)}
                ></div>
              );
            })}
          </div>

          <div className={styles.carousel_pausePlay} onClick={handlePuse}>
            {autoPlay ? (
              <BsPause style={{ fontSize: "18px" }} />
            ) : (
              <MdPlayArrow style={{ fontSize: "18px" }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
