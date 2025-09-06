import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { CategoryPage } from "./pages/CategoryPage.jsx";
import { Cart } from "./components/Cart.jsx";
import { fetchProducts } from "./redux/productsSlice.jsx";
import { ThankYouPage } from "./pages/ThankYouPage.jsx";

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
