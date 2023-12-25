import React from "react";
import styles from "./imgsStyleComp.module.css";
import { Image } from "antd";
import oneShoe from "./imgs/oneShoe.jpg";
import manWithShoe from "./imgs/manWithShoe.jpg";
import twoShoe from "./imgs/twoShoe.png";
import womanWithShoes from "./imgs/womanWithShoes.jpg";
const ImgsProdComp = () => {
  const imgs = [oneShoe, manWithShoe, twoShoe, womanWithShoes];
  return (
    <div className={`${styles.imgsCont}`}>
      {imgs.map((el) => (
        <Image
          className={`img-fluid ${styles.img}`}
          key={Math.random()}
          src={el}
        />
      ))}
    </div>
  );
};

export default ImgsProdComp;
