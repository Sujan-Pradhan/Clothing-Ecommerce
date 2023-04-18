import { useParams } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
// import { CategoriesContext } from "../../contexts/categories.context";

import "./Category.styles.scss";
import ProductCard from "../../components/product-card/Product-card.component";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/category.selector";

const Category = () => {
  const { category } = useParams();
  // const { categoriesMap } = useContext(CategoriesContext);
  const categories = useSelector(selectCategories);

  const [products, setProducts] = useState(categories?.[category]);

  useEffect(() => {
    setProducts(categories?.[category]);
  }, [category, categories]);

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </>
  );
};

export default Category;
