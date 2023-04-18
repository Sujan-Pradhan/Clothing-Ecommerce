// import React, { useContext } from "react";
// import CategoryPreview from "../../components/category-preview/Category-preview.component";
// import ProductCard from "../../components/product-card/Product-card.component";
// import { CategoriesContext } from "../../contexts/categories.context";
// import { ProductsContext } from "../../contexts/product.context";
// import SHOP_DATA from "../../shop-data.json";

import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../Category/Category.component";

import "./shop.styles.scss";
import { useDispatch } from "react-redux";
import { setCategories } from "../../store/categories/category.action";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { useEffect } from "react";

const Shop = () => {
  // const { products } = useContext(ProductsContext);
  //   console.log(products);
  // const { categoriesMap } = useContext(CategoriesContext);

  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      // const categoryMap = await getCategoriesAndDocuments();
      const categoryArray = await getCategoriesAndDocuments();
      // setCategoriesMap(categoryMap)
      dispatch(setCategories(categoryArray));
    };
    getCategoriesMap();
  }, []);

  return (
    <>
      {/* <div className="shop-container">
        {Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })}
      </div> */}

      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
      </Routes>
    </>
  );
};

export default Shop;

{
  /* {
      // use to make object into array 
      Object.keys(categoriesMap).map(title => (
        <div key={title}>
          <h2>{title}</h2>
          <div className="products-container">
        {categoriesMap[title]?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        </div>
        </div>
      ))
    } */
}
