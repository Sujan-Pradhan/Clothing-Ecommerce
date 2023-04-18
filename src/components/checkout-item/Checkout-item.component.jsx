import React, { useContext } from "react";
// import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, clearItemFromCart, removeItemFromCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

const CheckoutItem = ({ checkoutItem }) => {
  const { name, imageUrl, price, quantity } = checkoutItem;

  // const { clearItemFromCart, addItemToCart, removeItemFromCart } =
  //   useContext(CartContext);
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems,checkoutItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems,checkoutItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems,checkoutItem));
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
