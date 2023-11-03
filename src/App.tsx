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
        <Route path="/" element={<Shop />} />
        <Route
          path="/mens"
          element={<ShopCategory banner={banner_mens} category="men" />}
        />
        <Route
          path="/womens"
          element={<ShopCategory banner={banner_women} category="women" />}
        />
        <Route
          path="/kids"
          element={<ShopCategory banner={banner_kids} category="kid" />}
        />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/loginSignup" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
