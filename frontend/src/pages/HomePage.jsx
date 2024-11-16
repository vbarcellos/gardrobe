import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductList } from "../components/ProductList";
import { fetchProducts } from "../redux/productsSlice";

export const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <h1 className="titles">Find Your Fit at Gardrobe</h1>
      {status === "loading" && <p>Loading products...</p>}
      {status === "succeeded" && products.length > 0 && <ProductList products={products} />}
      {status === "succeeded" && products.length === 0 && <p>No products available.</p>}
      {status === "failed" && <p>Failed to load products. Please try again later.</p>}
    </>
  );
};
