import React, { useContext } from "react";
import ProductCard from "../../components/product-card/Product-card.component";
import { ProductsContext } from "../../contexts/product.context";
// import SHOP_DATA from "../../shop-data.json";

import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  //   console.log(products);
  return (
    <>
      <div className="products-container">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Shop;

{
  /* <div key={id}>
            <h1>{name}</h1>
          </div> */
}
