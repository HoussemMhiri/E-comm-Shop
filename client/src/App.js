import "./App.css";
import Home from "./components/homePage/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductsPage from "./components/productsPage/ProductsPage";
function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <ProductsPage />
    </div>
  );
}

export default App;
