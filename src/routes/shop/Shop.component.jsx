import React, { useContext } from "react";
import ProductCard from "../../components/product-card/Product-card.component";
import { CategoriesContext } from "../../contexts/categories.context";
// import { ProductsContext } from "../../contexts/product.context";
// import SHOP_DATA from "../../shop-data.json";

import "./shop.styles.scss";

const Shop = () => {
  // const { products } = useContext(ProductsContext);
  //   console.log(products);
  const {categoriesMap} = useContext(CategoriesContext);
  return (
    <>
    {
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
    }
    </>
  )
};

export default Shop;
