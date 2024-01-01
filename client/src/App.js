import "./App.css";
import Home from "./components/homePage/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductsPage from "./components/productsPage/ProductsPage";
import Values from "./components/valuesPage/Values";
import SignComp from "./components/signPage/SignComp";
import OneProdPage from "./components/oneProdpage/OneProdPage";
import HeaderNav from "./components/homePage/pages/navBar/HeaderNav";
import FooterComp from "./components/homePage/pages/footer/FooterComp";
import ShopCartComp from "./components/shopCart/ShopCartComp";
import LikedProd from "./components/likedPoductsPage/LikedProd";

function App() {
  return (
    <div className="App">
      <HeaderNav />
      {/*    <Home /> */}
      <ProductsPage />
      {/*  {<Values />} */}
      {/*       {<SignComp />} */}
      {/*  {<OneProdPage />} */}
      {/*   <ShopCartComp />  */}
      {/*  <LikedProd /> */}
      <FooterComp />
    </div>
  );
}

export default App;
