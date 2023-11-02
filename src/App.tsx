import { Navbar } from "@/components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Shop } from "@/pages/Shop";
import { ShopCategory } from "@/pages/ShopCategory";
import { LoginSignup } from "@/pages/LoginSignup";
import { Cart } from "@/pages/Cart";
import { Product } from "@/pages/Product";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory category="men" />} />
        <Route path="/womens" element={<ShopCategory category="women" />} />
        <Route path="/kids" element={<ShopCategory category="kid" />} />
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
