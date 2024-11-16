import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { CategoryPage } from "./pages/CategoryPage";
import { Cart } from "./components/Cart";
import { fetchProducts } from "./redux/productsSlice";
import { ThankYouPage } from "./pages/ThankYouPage";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};
