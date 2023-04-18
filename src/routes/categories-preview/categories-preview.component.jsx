// import { useContext } from "react";
import CategoryPreview from "../../components/category-preview/Category-preview.component";
// import { CategoriesContext } from "../../contexts/categories.context";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/category.selector";

const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(CategoriesContext);

  const categories = useSelector(selectCategories);

  return (
    <div className="category-preview-container">
      {categories &&
        Object.keys(categories).map((title) => {
          const products = categories[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })}
    </div>
  );
};

export default CategoriesPreview;
