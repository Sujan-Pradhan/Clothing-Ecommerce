import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";

import Button from "../button/Button.component";
import CartItem from "../cart-item/Cart-item.component";
// import "./cart-dropdown.styles.scss";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <>
      {/* <div className="empty-message">Your cart is empty</div> */}
      {/* <div className="cart-dropdown-container">
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))}
        </div>

        <Button onClick={goToCheckoutHandler}> Go to checkout</Button>
      </div> */}

      <CartDropdownContainer>
        <CartItems>
          {cartItems.length ? (
            cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
          ) : (
            <EmptyMessage> Your cart is Empty!!</EmptyMessage>
          )}
        </CartItems>

        <Button onClick={goToCheckoutHandler}> Go to checkout</Button>
      </CartDropdownContainer>
    </>
  );
};

export default CartDropdown;
