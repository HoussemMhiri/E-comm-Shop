import React from "react";
import HeaderNav from "./pages/navBar/HeaderNav";
import MainComp from "./pages/main/MainComp";
import FooterComp from "./pages/footer/FooterComp";

const Home = () => {
  return (
    <section>
      <HeaderNav />
      <MainComp />
      <FooterComp />
    </section>
  );
};

export default Home;
