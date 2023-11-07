import { Navbar } from "@/components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Shop } from "@/pages/Shop";
import { ShopCategory } from "@/pages/ShopCategory";
import { LoginSignup } from "@/pages/LoginSignup";
import { Cart } from "@/pages/Cart";
import { Product } from "@/pages/Product";
import { Footer } from "@/components/Footer";
import banner_kids from "@/assets/banner_kids.png";
import banner_mens from "@/assets/banner_mens.png";
import banner_women from "@/assets/banner_women.png";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/react_Shoppia/" element={<Shop />} />
        <Route
          path="/react_Shoppia/men"
          element={<ShopCategory banner={banner_mens} category="men" />}
        />
        <Route
          path="/react_Shoppia/women"
          element={<ShopCategory banner={banner_women} category="women" />}
        />
        <Route
          path="/react_Shoppia/kids"
          element={<ShopCategory banner={banner_kids} category="kids" />}
        />
        <Route path="/react_Shoppia/product" element={<Product />}>
          <Route path="react_Shoppia/:productId" element={<Product />} />
        </Route>
        <Route path="/react_Shoppia/cart" element={<Cart />} />
        <Route path="/react_Shoppia/loginSignup/*" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
