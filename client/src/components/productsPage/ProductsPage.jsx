import React from "react";
import styles from "./productsStyle.module.css";
import HeaderNav from "../homePage/pages/navBar/HeaderNav";
import Banner from "./pages/banner/Banner";
import image from "../assets/BannerWeather.png";
import { NewsL } from "../homePage/pages/main";
import FooterComp from "../homePage/pages/footer/FooterComp";
import ProductComp from "./pages/productsComp/ProductComp";
import FiltersProduct from "./pages/filterCont/FiltersProduct";
import BtnShop from "../reusebleComp/shopBtn/BtnShop";

const ProductsPage = () => {
  return (
    <div>
      <HeaderNav />
      <Banner
        backgroundImageB={image}
        h3={"Versatile. Sustainable. Oh So Comfy!"}
        p={"The Weekend Boot"}
      />
      <div className={styles.filterComponent}>
        <FiltersProduct
          filterCont={styles.filterCont}
          rowCont={styles.rowCont}
          divCont={styles.divCont}
          sortP={styles.sortP}
          select={styles.select}
          productsCont={styles.productsCont}
        />
      </div>
      <div className={styles.productCont}>
        <ProductComp />
      </div>
      <div className={styles.btnCont}>
        <BtnShop pBtn={"Back Home"} styleBtn={styles.Btn} />
      </div>
      <NewsL />
      <FooterComp />
    </div>
  );
};

export default ProductsPage;
