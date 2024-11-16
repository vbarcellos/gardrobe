import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export const ProductCard = ({ product }) => {
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const GARDROBE_URL = process.env.GARDROBE_BASE_URL || "http://localhost:5000";

  return (
    <div className="product-card">
      <img src={`${GARDROBE_URL}${product.image}`} alt={product.name} />
      <div className="product-details">
        <h3>{product.name}</h3>
        <p className="description">{product.description}</p>
        <p className="price">{product.price}</p>
      </div>
      <div className="product-actions">
        <button onClick={handleAddToCart} disabled={isAdded}>
          {isAdded ? "Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};
