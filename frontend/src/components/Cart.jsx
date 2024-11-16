import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromCart, clearCart } from "../redux/cartSlice";

export const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCheckout = () => {
    dispatch(clearCart());
    navigate("/thank-you");
  };

  const totalPrice = cartItems
    .reduce((total, item) => total + item.quantity * parseFloat(item.price.slice(1)), 0)
    .toFixed(2);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <h4>{item.name}</h4>
              <p className="quantity">Quantity: {item.quantity}</p>
              <p className="price">Price: {item.price}</p>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          ))}
          <div className="cart-total">
            <p className="total-text">Total: ${totalPrice}</p>
          </div>

          <div className="cart-actions">
            <button onClick={handleClearCart}>Clear Cart</button>
            <button onClick={handleCheckout}>Checkout</button>
          </div>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};
