import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import BagIcon from "../../../../icons/BagIcon";
import AdminIcon from "../../../../icons/AdminIcon";
import LikeItem from "../../../../icons/LikeItem";
import SearchOffCanvas from "../../../reusebleComp/offcanvas/SearchOffCanvas";

const HeaderNav = () => {
  const cat = [
    "New",
    "Sale",
    "Going Fast",
    "Rain",
    "Snow",
    "All Weather",
    "Shop All",
    "Values",
  ];
  const [fix, setFix] = useState(false);
  useEffect(() => {
    const scroll = () => {
      if (window.scrollY >= 150) {
        setFix(true);
      } else {
        setFix(false);
      }
    };
    window.addEventListener("scroll", scroll);
    return () => {};
  }, []);

  return (
    <>
      <header>
        <div className={styles.upperNavDiv}>
          <p className={styles.upperNavParg}>
            Free Shipping Worldwide. Easy returns. Pay in 4 installments.
          </p>
        </div>
      </header>
      <div className={`${fix ? styles.header_contMod : styles.header_cont}`}>
        <div className={styles.headerFrist}>
          <img
            className={`${fix ? styles.logoMod : styles.logo}`}
            src="img/THESUS-LOGO1.png"
            alt=""
          />
          <div className={styles.categories}>
            {cat.map((el) => (
              <span className={styles.spans}>{el}</span>
            ))}
          </div>
        </div>

        <div className={styles.headerSecond}>
          <select className={styles.selection} name="" id="">
            <option value="english">English</option>
            <option value="french">French</option>
            <option value="spanish">Spanish</option>
          </select>
          <div className={styles.iconsNav}>
            <SearchOffCanvas />
            <AdminIcon />
            <BagIcon />
            <LikeItem />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderNav;
