import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartDropdown from "../../components/cart-dropdown/Cart-dropdown.component";
import CartIcon from "../../components/cart-icon/Cart-icon.component";
import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";
import { SignOutUser } from "../../utils/firebase/firebase.utils";

// import "./navigation.styles.scss";
import { LogoContainer, NavigationContainer, NavLink, NavLinks } from "./navigation-styles"

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const { isCartOpen } = useContext(CartContext);
  // console.log(currentUser, "Sujan");

  // const signOutHandler = async () => {
  //   await SignOutUser();
  //   setCurrentUser(null);
  // };

  return (
    <>
     <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>

        <NavLinks>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={SignOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        { isCartOpen &&  <CartDropdown />}
        
      </NavigationContainer>
      <Outlet />




      {/* <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={SignOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        { isCartOpen &&  <CartDropdown />}
        
      </div>
      <Outlet /> */}
    </>
  );
};

export default Navigation;
