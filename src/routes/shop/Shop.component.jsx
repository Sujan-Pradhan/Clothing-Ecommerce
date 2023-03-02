import React, { useContext } from "react";
import CategoryPreview from "../../components/category-preview/Category-preview.component";
// import ProductCard from "../../components/product-card/Product-card.component";
import { CategoriesContext } from "../../contexts/categories.context";
// import { ProductsContext } from "../../contexts/product.context";
// import SHOP_DATA from "../../shop-data.json";

import "./shop.styles.scss";

const Shop = () => {
  // const { products } = useContext(ProductsContext);
  //   console.log(products);
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      <div className="shop-container">
        {Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })}
      </div>
     
    </>
  );
};

export default Shop;

 {/* {
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
    } */}