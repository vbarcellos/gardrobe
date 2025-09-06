import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice.js";

export const ProductCard = ({ product }) => {
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const priceStr =
      typeof product.price === "number"
        ? `$${product.price.toFixed(2)}`
        : String(product.price).startsWith("$")
        ? String(product.price)
        : `$${product.price}`;

    const productForCart = { ...product, price: priceStr };

    dispatch(addToCart(productForCart));
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const imgSrc = product.image;

  return (
    <div className="product-card">
      <img src={imgSrc} alt={product.name} />
      <div className="product-details">
        <h3>{product.name}</h3>
        <p className="description">{product.description}</p>
        <p className="price">
          {typeof product.price === "number"
            ? `$${product.price.toFixed(2)}`
            : product.price}
        </p>
      </div>
      <div className="product-actions">
        <button onClick={handleAddToCart} disabled={isAdded}>
          {isAdded ? "Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};
