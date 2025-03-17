import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/layout/Navbar";
import Products from "@/pages/Products";
import CartPage from "@/pages/Cart";
import { CartProvider } from "@/context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}
