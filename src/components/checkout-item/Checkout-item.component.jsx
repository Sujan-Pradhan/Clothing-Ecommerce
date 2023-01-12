import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ checkoutItem }) => {
  const { name, imageUrl, price, quantity } = checkoutItem;

  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(checkoutItem);
  const addItemHandler = () => addItemToCart(checkoutItem);
  const removeItemHandler = () => removeItemFromCart(checkoutItem);
  return (
    <>
      <div className="checkout-item-container">
        <div className="image-container">
          <img src={imageUrl} alt={`${name}`} />
        </div>
        <span className="checkout-name">{name}</span>
        <span className="checkout-quantity">
          <div className="checkout-arrow" onClick={removeItemHandler}>
            &#10094;
          </div>
          <span className="checkout-value">{quantity}</span>
          <div className="checkout-arrow" onClick={addItemHandler}>
            &#10095;
          </div>
        </span>
        <span className="checkout-price">{price}</span>
        <div className="remove-button" onClick={clearItemHandler}>
          &#10005;
        </div>
      </div>
    </>
  );
};

export default CheckoutItem;
