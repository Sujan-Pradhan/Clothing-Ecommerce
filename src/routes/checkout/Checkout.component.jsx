import React, { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/Checkout-item.component";
import { CartContext } from "../../contexts/cart.context";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart,cartTotal } =
    useContext(CartContext);
  return (
    <>
      <div className="checkout-container">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map((cartItem) => {
          {/* const { id, name, quantity } = cartItem; */}
          return (
            <CheckoutItem key={cartItem.id} checkoutItem={cartItem} />
            /* <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
              <br />
              <span onClick={() => removeItemFromCart(cartItem)}>
                Decrement
              </span>
              <br />
              <span onClick={() => addItemToCart(cartItem)}>Increment</span>
            </div> */
          );
        })}
        <span className="total">Total: ${cartTotal}</span>
      </div>
    </>
  );
};

export default Checkout;
