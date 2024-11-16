import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ProductList } from "../components/ProductList";
import { fetchProducts } from "../redux/productsSlice";

export const CategoryPage = () => {
  const dispatch = useDispatch();
  const { category } = useParams();

  const products = useSelector((state) =>
    state.products.items.filter((product) => product.category === category.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h1 className="titles">{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      {products.length > 0 ? <ProductList products={products} /> : <p>No products found for this category.</p>}
    </div>
  );
};
