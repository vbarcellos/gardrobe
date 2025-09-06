import { useSelector } from "react-redux";
import { ProductList } from "../components/ProductList.jsx";

export const HomePage = () => {
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);

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
