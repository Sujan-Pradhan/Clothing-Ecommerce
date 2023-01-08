import React from "react";

import Button from "../button/Button.component"
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  return (
    <>
      <div className="cart-dropdown-container">
      <div className="empty-message">Your cart is empty</div>
        <div className="cart-items"></div>
        <Button> Go to checkout</Button>
      </div>
    </>
  );
};

export default CartDropdown;
