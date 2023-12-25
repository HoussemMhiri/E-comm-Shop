import React from "react";
import styles from "./oneProd.module.css";
import HeaderNav from "../homePage/pages/navBar/HeaderNav";
import FooterComp from "../homePage/pages/footer/FooterComp";
import { NewsL } from "../homePage/pages/main";
import ImgsProdComp from "./imgsComp/ImgsProdComp";
import DescComp from "./descComp/DescComp";
import MediaCard from "./mediaCard/MediaCard";
const OneProdPage = () => {
  return (
    <div>
      <div className={`container-fluid ${styles.AllCont}`}>
        <div className={`container-fluid ${styles.upCont}`}>
          <div className="row">
            <div className="col-md-8 col-12">
              <ImgsProdComp />
            </div>
            <div className="col-md-4 col-12">
              <DescComp />
            </div>
          </div>
        </div>
        <div>
          <MediaCard />
        </div>
      </div>
    </div>
  );
};

export default OneProdPage;
