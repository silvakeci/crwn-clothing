import { Fragment, useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.scss";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/userContext";
import { signOutUser } from "../../utils/firebase/fireBase";
import CartIcon from "../../Component/cardIcon/cartIcon";
import CartDropdown from "../../Component/cartDropdown/cartDropdown";
import { CartContext } from "../../contexts/cartContext";
import CheckOut from "../../Component/checkOut/checkOut";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, showCheckOutPage } = useContext(CartContext);
  console.log("rrrrrrrrrrr", showCheckOutPage);

  return (
    <Fragment>
      {showCheckOutPage ? (
        <Link className="nav-link" to="/checkout">
          <CheckOut />
        </Link>
      ) : (
        <div className="navigation">
          <Link className="logo-container" to="/">
            <CrwnLogo className="logo" />
          </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
              SHOP
            </Link>
            {currentUser ? (
              <span className="nav-link" onClick={signOutUser}>
                SIGN OUT
              </span>
            ) : (
              <Link className="nav-link" to="/auth">
                Sign In
              </Link>
            )}
            <CartIcon />
          </div>
          {isCartOpen && <CartDropdown />}
        </div>
      )}

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
