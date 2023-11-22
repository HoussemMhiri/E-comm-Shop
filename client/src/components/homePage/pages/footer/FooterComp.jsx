import React from "react";
import styles from "./footer.module.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoLogoTiktok } from "react-icons/io5";
import { IoLogoPinterest } from "react-icons/io5";
import { gridData, iconsData } from "./gridData";
const FooterComp = () => {
  const footers = [
    "Thesus Outdoors",
    "Powered by Shopify",
    "Refund policy",
    "Privacy policy",
    "Terms of service",
    "Shipping policy",
    "Contact information",
  ];
  return (
    <div className={styles.allCont}>
      <div className={styles.allContOne}>
        <div className={styles.allContLeft}>
          <img
            src="https://thesusoutdoors.com/cdn/shop/files/Thesus-white-logo.png?v=1686324987&width=1100"
            alt=""
            height={50}
            width={99}
          />
          <p className={styles.allContLefP}>
            Socially and environmentally progressive outdoor footwear
          </p>
          <div className={styles.logos}>
            <AiFillFacebook className={styles.logo} />
            <AiOutlineInstagram className={styles.logo} />
            <IoLogoTiktok className={styles.logo} />
            <IoLogoPinterest className={styles.logo} />
          </div>
        </div>
        <div className={styles.allContGrid}>
          {gridData.map((el) => (
            <div>
              <h6 className={styles.h6}>{el.title}</h6>
              <div>
                {el.more.map((el) => (
                  <p className={styles.p}>{el}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.companyContAll}>
        <div className={styles.companyCont}>
          {iconsData.map((el) => (
            <div className={styles.companyDiv}>
              <img className={styles.company} src={el} alt="" />
            </div>
          ))}
        </div>
        <div className={styles.spansCont}>
          <span style={{ fontSize: "13px", marginTop: "10px" }}>
            {" "}
            &#169; 2023,
          </span>
          {footers.map((el) => (
            <span className={styles.spans}>{el}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterComp;
