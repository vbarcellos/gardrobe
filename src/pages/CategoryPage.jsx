import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ProductList } from "../components/ProductList.jsx";

export const CategoryPage = () => {
  const { category } = useParams();

  const products = useSelector((state) =>
    state.products.items.filter((product) => product.category === category.toLowerCase())
  );

  return (
    <div>
      <h1 className="titles">{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      {products.length > 0 ? <ProductList products={products} /> : <p>No products found for this category.</p>}
    </div>
  );
};
