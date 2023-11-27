import React from "react";
import styles from "./productsStyle.module.css";
import HeaderNav from "../homePage/pages/navBar/HeaderNav";
import Banner from "./pages/banner/Banner";
import image from "../assets/BannerWeather.png";
import { NewsL } from "../homePage/pages/main";
import FooterComp from "../homePage/pages/footer/FooterComp";
import ProductComp from "./pages/productsComp/ProductComp";
import FiltersProduct from "./pages/filterCont/FiltersProduct";

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
        <FiltersProduct />
      </div>
      <div className={styles.productCont}>
        <ProductComp />
      </div>

      <NewsL />
      <FooterComp />
    </div>
  );
};

export default ProductsPage;
