// import { useContext } from "react";
import CategoryPreview from "../../components/category-preview/Category-preview.component";
// import { CategoriesContext } from "../../contexts/categories.context";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";

const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(CategoriesContext);

  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <div className="category-preview-container">
      {categoriesMap && Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default CategoriesPreview;
